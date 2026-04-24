/**
 * Setup para tests - configuración global
 */

// Simular customElements si no existe (para tests)
if (typeof customElements === 'undefined') {
  global.customElements = {
    define: () => {},
    get: () => undefined,
  };
}

// Variables CSS básicas para tests
document.documentElement.style.setProperty('--font-body', 'sans-serif');
document.documentElement.style.setProperty('--font-head', 'sans-serif');
document.documentElement.style.setProperty('--accent', '#ea580c');
