/**
 * Lazy loading para imágenes de fondo
 * Usa IntersectionObserver para cargar imágenes solo cuando están cerca del viewport
 */

document.addEventListener('DOMContentLoaded', function() {
  // Configuración del observer
  const observerOptions = {
    root: null, // viewport
    rootMargin: '50px', // Cargar 50px antes de que aparezca
    threshold: 0.01
  };

  // Callback cuando un elemento entra al viewport
  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const imageUrl = element.dataset.bg;

        if (imageUrl) {
          // Cargar la imagen
          element.style.backgroundImage = `url('${imageUrl}')`;

          // Agregar clase para animación opcional
          element.classList.add('loaded');

          // Dejar de observar este elemento
          observer.unobserve(element);
        }
      }
    });
  };

  // Crear el observer
  const imageObserver = new IntersectionObserver(handleIntersection, observerOptions);

  // Observar todos los elementos con data-bg
  const lazyBackgrounds = document.querySelectorAll('[data-bg]');
  lazyBackgrounds.forEach(element => {
    imageObserver.observe(element);
  });

  // También manejar imágenes <img> con loading="lazy" para navegadores antiguos
  if ('loading' in HTMLImageElement.prototype) {
    // Navegador soporta lazy loading nativo, no hacer nada
  } else {
    // Fallback para navegadores antiguos
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => {
      imageObserver.observe(img);
    });
  }
});
