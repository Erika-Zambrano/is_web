import { EMAIL_REGEX, INSTAGRAM_REGEX, normalizeInstagram } from './validation.js';

/**
 * Form handler para contacto con validación y feedback visual
 * MODO_SIMULADO: cuando tengas tu Formspree ID, cambia a false y actualiza FORMSPREE_ID
 */

const MODO_SIMULADO = false; // Cambiar a false cuando tengas Formspree
const FORMSPREE_ID = 'TU_FORMSPREE_ID'; // Reemplazar con tu ID real de Formspree

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form-contacto');
  if (!form) return;

  form.addEventListener('submit', handleFormSubmit);

  // Validación en tiempo real
  setupRealtimeValidation(form);
});

async function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const submitBtn = form.querySelector('.contacto-submit');
  const formBox = form.closest('.contacto-form-box');

  // Limpiar mensajes anteriores
  clearMessages(formBox);

  // Validar campos
  const validation = validateForm(form);
  if (!validation.valid) {
    showMessage(formBox, validation.message, 'error');
    return;
  }

  // Deshabilitar botón y mostrar loading
  const originalText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = 'Enviando...';
  submitBtn.classList.add('loading');

  try {
    if (MODO_SIMULADO) {
      // Modo simulado: fake delay
      await simulateSubmit();
      showMessage(formBox, '¡Mensaje enviado! (Modo simulado - configura Formspree para envíos reales)', 'success');
      form.reset();

      // Tracking Google Analytics (si está configurado)
      if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submit', {
          'event_category': 'Contact',
          'event_label': 'Contact Form - Simulated'
        });
      }
    } else {
      // Modo real: enviar a Formspree
      const formData = new FormData(form);
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        showMessage(formBox, '¡Mensaje enviado con éxito! Te responderemos pronto.', 'success');
        form.reset();

        // Tracking Google Analytics (si está configurado)
        if (typeof gtag !== 'undefined') {
          gtag('event', 'form_submit', {
            'event_category': 'Contact',
            'event_label': 'Contact Form'
          });
        }
      } else {
        throw new Error('Error al enviar el formulario');
      }
    }
  } catch (error) {
    showMessage(formBox, 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.', 'error');
    console.error('Error:', error);
  } finally {
    // Restaurar botón
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
    submitBtn.classList.remove('loading');
  }
}

function validateForm(form) {
  const nombreInput = form.querySelector('[name="nombre"]');
  const instagramInput = form.querySelector('[name="instagram"]');
  const emailInput = form.querySelector('[name="email"]');
  const mensajeInput = form.querySelector('[name="mensaje"]');
  const privacidadInput = form.querySelector('[name="privacidad"]');

  const nombre = nombreInput.value.trim();
  let instagram = instagramInput.value.trim();
  const email = emailInput.value.trim();
  const mensaje = mensajeInput.value.trim();
  const privacidad = privacidadInput.checked;

  // Validar nombre
  if (!nombre) {
    return { valid: false, message: 'Por favor, ingresa tu nombre.' };
  }
  if (nombre.length < 2) {
    return { valid: false, message: 'El nombre debe tener al menos 2 caracteres.' };
  }

  // Validar y normalizar Instagram
  if (!instagram) {
    return { valid: false, message: 'Por favor, ingresa tu usuario de Instagram.' };
  }
  instagram = normalizeInstagram(instagram);
  instagramInput.value = instagram;
  if (!INSTAGRAM_REGEX.test(instagram)) {
    return { valid: false, message: 'El usuario de Instagram solo puede contener letras, números, puntos y guiones bajos.' };
  }

  // Validar email
  if (!email) {
    return { valid: false, message: 'Por favor, ingresa tu email.' };
  }
  if (!EMAIL_REGEX.test(email)) {
    return { valid: false, message: 'Por favor, ingresa un email válido (debe incluir @ y dominio).' };
  }

  // Validar mensaje
  if (!mensaje) {
    return { valid: false, message: 'Por favor, escribe un mensaje.' };
  }
  if (mensaje.length < 10) {
    return { valid: false, message: 'El mensaje debe tener al menos 10 caracteres.' };
  }

  // Validar privacidad
  if (!privacidad) {
    return { valid: false, message: 'Debes aceptar los Términos de Privacidad.' };
  }

  return { valid: true };
}

function showMessage(container, message, type) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `form-message form-message-${type}`;
  messageDiv.textContent = message;
  container.insertBefore(messageDiv, container.firstChild);

  // Auto-ocultar después de 5 segundos si es éxito
  if (type === 'success') {
    setTimeout(() => {
      messageDiv.remove();
    }, 5000);
  }
}

function clearMessages(container) {
  const messages = container.querySelectorAll('.form-message');
  messages.forEach(msg => msg.remove());
}

function simulateSubmit() {
  return new Promise(resolve => {
    setTimeout(resolve, 1000); // Simular delay de red
  });
}

function setupRealtimeValidation(form) {
  const nombreInput = form.querySelector('[name="nombre"]');
  const instagramInput = form.querySelector('[name="instagram"]');
  const emailInput = form.querySelector('[name="email"]');
  const mensajeInput = form.querySelector('[name="mensaje"]');

  // Validar nombre
  if (nombreInput) {
    nombreInput.addEventListener('blur', function() {
      const value = this.value.trim();
      if (value && value.length >= 2) {
        this.classList.remove('invalid');
        this.classList.add('valid');
      } else if (value && value.length < 2) {
        this.classList.remove('valid');
        this.classList.add('invalid');
      } else {
        this.classList.remove('valid', 'invalid');
      }
    });
  }

  // Validar Instagram con auto-corrección
  if (instagramInput) {
    instagramInput.addEventListener('blur', function() {
      let value = this.value.trim();
      if (value) {
        value = normalizeInstagram(value);
        this.value = value;
        if (INSTAGRAM_REGEX.test(value)) {
          this.classList.remove('invalid');
          this.classList.add('valid');
        } else {
          this.classList.remove('valid');
          this.classList.add('invalid');
        }
      } else {
        this.classList.remove('valid', 'invalid');
      }
    });
  }

  // Validar email
  if (emailInput) {
    emailInput.addEventListener('blur', function() {
      const value = this.value.trim();
      if (value) {
        if (EMAIL_REGEX.test(value)) {
          this.classList.remove('invalid');
          this.classList.add('valid');
        } else {
          this.classList.remove('valid');
          this.classList.add('invalid');
        }
      } else {
        this.classList.remove('valid', 'invalid');
      }
    });
  }

  // Validar mensaje
  if (mensajeInput) {
    mensajeInput.addEventListener('blur', function() {
      const value = this.value.trim();
      if (value && value.length >= 10) {
        this.classList.remove('invalid');
        this.classList.add('valid');
      } else if (value && value.length < 10) {
        this.classList.remove('valid');
        this.classList.add('invalid');
      } else {
        this.classList.remove('valid', 'invalid');
      }
    });
  }
}
