/**
 * Tests para validación de formulario
 */
import { describe, it, expect } from 'vitest';

describe('Validación de Email', () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  it('debería validar emails correctos', () => {
    const validEmails = [
      'test@example.com',
      'user.name@domain.co',
      'contact+tag@site.org',
    ];

    validEmails.forEach(email => {
      expect(emailRegex.test(email)).toBe(true);
    });
  });

  it('debería rechazar emails inválidos', () => {
    const invalidEmails = [
      'invalid',
      'missing@domain',
      '@nodomain.com',
      'no@space .com',
    ];

    invalidEmails.forEach(email => {
      expect(emailRegex.test(email)).toBe(false);
    });
  });
});

describe('Validación de Instagram', () => {
  const instagramRegex = /^@[a-zA-Z0-9._]+$/;

  function normalizeInstagram(username) {
    // Agregar @ si no lo tiene
    if (!username.startsWith('@')) {
      username = '@' + username;
    }
    return username;
  }

  it('debería agregar @ automáticamente', () => {
    expect(normalizeInstagram('usuario')).toBe('@usuario');
    expect(normalizeInstagram('test.user')).toBe('@test.user');
  });

  it('debería mantener @ si ya lo tiene', () => {
    expect(normalizeInstagram('@usuario')).toBe('@usuario');
  });

  it('debería validar usernames válidos', () => {
    const validUsernames = [
      '@usuario',
      '@user.name',
      '@test_user',
      '@user123',
    ];

    validUsernames.forEach(username => {
      expect(instagramRegex.test(username)).toBe(true);
    });
  });

  it('debería rechazar usernames inválidos', () => {
    const invalidUsernames = [
      '@user name', // espacio
      '@user!', // carácter especial
      '@user#tag', // hashtag
    ];

    invalidUsernames.forEach(username => {
      expect(instagramRegex.test(username)).toBe(false);
    });
  });
});

describe('Validación de longitud', () => {
  it('debería validar nombre con mínimo 2 caracteres', () => {
    expect('ab'.length >= 2).toBe(true);
    expect('Juan'.length >= 2).toBe(true);
    expect('a'.length >= 2).toBe(false);
  });

  it('debería validar mensaje con mínimo 10 caracteres', () => {
    expect('Hola mundo'.length >= 10).toBe(true);
    expect('Este es un mensaje largo'.length >= 10).toBe(true);
    expect('Corto'.length >= 10).toBe(false);
  });
});

describe('Validación completa de formulario', () => {
  function validateFormData(data) {
    const errors = [];

    // Validar nombre
    if (!data.nombre || data.nombre.trim().length < 2) {
      errors.push('Nombre debe tener al menos 2 caracteres');
    }

    // Validar Instagram
    let instagram = data.instagram?.trim() || '';
    if (!instagram) {
      errors.push('Instagram es requerido');
    } else {
      if (!instagram.startsWith('@')) {
        instagram = '@' + instagram;
      }
      const instagramRegex = /^@[a-zA-Z0-9._]+$/;
      if (!instagramRegex.test(instagram)) {
        errors.push('Instagram inválido');
      }
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email.trim())) {
      errors.push('Email inválido');
    }

    // Validar mensaje
    if (!data.mensaje || data.mensaje.trim().length < 10) {
      errors.push('Mensaje debe tener al menos 10 caracteres');
    }

    // Validar privacidad
    if (!data.privacidad) {
      errors.push('Debes aceptar los términos de privacidad');
    }

    return {
      valid: errors.length === 0,
      errors
    };
  }

  it('debería validar formulario completo correcto', () => {
    const formData = {
      nombre: 'Juan Pérez',
      instagram: 'juanperez',
      email: 'juan@example.com',
      mensaje: 'Este es un mensaje de prueba',
      privacidad: true
    };

    const result = validateFormData(formData);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it('debería detectar errores múltiples', () => {
    const formData = {
      nombre: 'J', // muy corto
      instagram: '', // vacío
      email: 'invalid', // inválido
      mensaje: 'Corto', // muy corto
      privacidad: false // no aceptado
    };

    const result = validateFormData(formData);
    expect(result.valid).toBe(false);
    expect(result.errors.length).toBeGreaterThan(0);
  });

  it('debería normalizar Instagram y validar', () => {
    const formData = {
      nombre: 'Test User',
      instagram: 'testuser', // sin @
      email: 'test@example.com',
      mensaje: 'Este es un mensaje válido',
      privacidad: true
    };

    const result = validateFormData(formData);
    expect(result.valid).toBe(true);
  });
});
