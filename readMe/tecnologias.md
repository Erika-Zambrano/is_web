# 🛠️ Tecnologías

Stack tecnológico del proyecto IS, Art Sport.

---

## 📚 Core Technologies

### HTML5
- **Versión:** Estándar HTML5
- **Uso:** Estructura semántica de páginas
- **Características:**
  - Semantic tags (header, main, footer, section)
  - ARIA attributes para accesibilidad
  - Meta tags para SEO

---

### CSS3
- **Metodología:** Custom Properties + BEM-like naming
- **Características:**
  - Variables CSS (`:root`)
  - Flexbox y Grid
  - Media queries responsive
  - Animations y transitions

**Archivos principales:**
- `src/styles/styles.css` - Design system y estilos globales
- `src/styles/components.css` - Estilos de componentes

---

### JavaScript (ES6+)
- **Versión:** ES2015+
- **Sintaxis:** ES Modules
- **Uso:** Web Components, validación, interactividad

**Características usadas:**
- `async/await`
- Arrow functions
- Template literals
- Destructuring
- Modules (`import/export`)

---

## 🎨 Web Components

### API nativa del navegador
- **CustomElements API** - Crear elementos HTML personalizados
- **Shadow DOM** - No usado (estilos globales)
- **Templates** - Generación dinámica

**Componentes creados:**
- `ez-button` - Botón/enlace reutilizable
- `ez-card` - Tarjeta con label opcional
- `ez-tag` - Badge/etiqueta
- `ez-section-title` - Título de sección
- `ez-container` - Contenedor con max-width

**Ver más:** `docs/components/README.md`

---

## 🚀 Build Tools

### Vite
- **Versión:** ^5.0.0
- **Uso:** Dev server + Build tool

**Características:**
- ⚡ Hot Module Replacement (HMR)
- 📦 Bundling optimizado
- 🗜️ Minificación automática
- 🎯 Tree-shaking
- 🔨 Build en <400ms

**Configuración:** `vite.config.js`

---

## 🧪 Testing

### Vitest
- **Versión:** ^1.6.0 (compatible con Node 18)
- **Uso:** Test runner

**Características:**
- Compatible con Vite
- API similar a Jest
- Modo watch
- UI opcional

### Happy-DOM
- **Versión:** ^14.12.0
- **Uso:** Simula el DOM para tests

**Alternativa:** jsdom (más pesado)

**Ver más:** `tests/README.md`

---

## 📦 Package Manager

### npm
- **Versión:** 9.2.0+
- **Node:** 18.19.1+

**Alternativas compatibles:**
- yarn
- pnpm

---

## 🎨 Diseño y Fonts

### Google Fonts
- **Syne** - Títulos (pesos: 500, 600, 700, 800)
- **DM Sans** - Texto body (pesos: 500, 600, itálica 500)

**Optimizaciones:**
- Subset latino (solo caracteres español)
- Preload de Syne 800 (hero)
- `font-display: swap`

---

## 📊 Analytics

### Google Analytics 4
- **Versión:** GA4
- **Estado:** Configurado (placeholder)
- **ID:** `G-XXXXXXXXXX` (por configurar)

**Eventos trackeados:**
- `form_submit` - Envío de formulario

---

## 📧 Formulario

### Formspree (preparado)
- **Estado:** Modo simulado
- **Cambiar a producción:** `src/js/form-handler.js`

**Alternativas:**
- Netlify Forms
- EmailJS
- Backend propio

---

## 🌐 APIs del navegador utilizadas

### IntersectionObserver
- **Uso:** Lazy loading de imágenes
- **Archivo:** `src/js/lazy-images.js`
- **Soporte:** 96%+ navegadores

### Fetch API
- **Uso:** Carga de partials (header/footer)
- **Archivo:** `src/js/include-layout.js`
- **Soporte:** 98%+ navegadores

### CustomElements API
- **Uso:** Web Components
- **Archivos:** `src/components/*.js`
- **Soporte:** 96%+ navegadores

---

## 🎯 Sin frameworks

El proyecto **intencionalmente** no usa:
- ❌ React, Vue, Angular
- ❌ jQuery
- ❌ Bootstrap, Tailwind
- ❌ Sass, Less (solo CSS nativo)

**¿Por qué?**
- ⚡ Más rápido (menos JavaScript)
- 📦 Más ligero (~10 KB total vs ~100 KB+ con frameworks)
- 🎓 Más educativo (aprende vanilla)
- 🔧 Más simple (menos configuración)

---

## 📊 Comparación de tamaño

| Asset | Desarrollo | Producción (gzip) | Reducción |
|-------|-----------|-------------------|-----------|
| CSS | ~35 KB | 4.69 KB | 87% |
| JS | ~15 KB | 3.01 KB | 80% |
| HTML | ~50 KB | ~30 KB | 40% |
| **Total** | **~100 KB** | **~37.7 KB** | **~62%** |

---

## 🌍 Compatibilidad de navegadores

### Soporte objetivo
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile: iOS 14+, Android Chrome 90+

### Características modernas usadas
- ES6 Modules
- Custom Properties (CSS Variables)
- Flexbox/Grid
- IntersectionObserver
- Fetch API
- CustomElements

**Fallbacks:**
- `prefers-reduced-motion`
- `prefers-contrast`
- `focus-visible` / `focus`

---

## 🔮 Posibles upgrades futuros

Si el proyecto crece:
- **TypeScript** - Type safety
- **Sass/PostCSS** - CSS avanzado
- **Playwright** - Tests E2E
- **Prettier** - Code formatting
- **ESLint** - Linting
- **Husky** - Git hooks
- **Lighthouse CI** - Performance monitoring

---

## 📦 Dependencias actuales

```json
{
  "dependencies": {},
  "devDependencies": {
    "vite": "^5.0.0",
    "vitest": "^1.6.0",
    "@vitest/ui": "^1.6.0",
    "happy-dom": "^14.12.0"
  }
}
```

**Total:** 4 dependencias de desarrollo, 0 de producción.

---

## 🎓 Recursos de aprendizaje

- [MDN Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [Vite Documentation](https://vitejs.dev/)
- [Vitest Documentation](https://vitest.dev/)
- [Web.dev - Performance](https://web.dev/performance/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

[← Volver al README principal](../README.md)
