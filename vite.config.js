import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/is_web/',

  root: 'pages',

  publicDir: resolve(__dirname, 'public'),

  resolve: {
    alias: {
      '/src': resolve(__dirname, 'src')
    }
  },

  server: {
    port: 8000,
    open: true,
    host: true
  },

  preview: {
    port: 8080,
    open: true
  },

  build: {
    outDir: resolve(__dirname, 'dist'),
    assetsDir: 'assets',
    emptyOutDir: true,
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'pages/index.html'),
        programas: resolve(__dirname, 'pages/programas.html'),
        quienesSomos: resolve(__dirname, 'pages/quienes-somos.html'),
        comoTrabajamos: resolve(__dirname, 'pages/como-trabajamos.html'),
        preguntas: resolve(__dirname, 'pages/preguntas.html'),
        contacto: resolve(__dirname, 'pages/contacto.html')
      },
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    },
    chunkSizeWarningLimit: 1000
  },

  optimizeDeps: {
    include: []
  }
});
