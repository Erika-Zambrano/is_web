import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'happy-dom', // Simula el DOM del navegador
    globals: true, // Variables globales como describe, it, expect
    setupFiles: './tests/setup.js', // Configuración inicial
  },
});
