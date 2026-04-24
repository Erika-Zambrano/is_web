# Changelog - IS, Art Sport

## [1.1.0] - 2026-03-17 - Reorganización de estructura

### 📁 Estructura reorganizada

**Antes:**
- Todos los HTMLs en raíz
- CSS, JS y components mezclados en raíz
- Difícil de escalar

**Después:**
- `pages/` - Todas las páginas HTML organizadas
- `src/` - Todo el código fuente (components, js, styles, partials)
- `public/` - Assets estáticos (robots.txt, sitemap.xml, PDFs)
- `docs/` - Documentación del proyecto
- `tests/` - Suite de tests

### ✨ Mejoras implementadas

**Fase 1: Fundamentos**
- ✅ Meta tags SEO completos (description, Open Graph, Twitter Cards)
- ✅ Referencias a favicon agregadas
- ✅ Formulario con validación completa y feedback visual
- ✅ Manejo de errores en carga de partials

**Fase 2: Rendimiento**
- ✅ Lazy loading de imágenes (IntersectionObserver)
- ✅ Optimización de Google Fonts (subset latino, preload)
- ✅ Validación mejorada de formulario (Instagram auto-@, longitudes)
- ✅ Enlaces de redes sociales con seguridad (rel="noopener noreferrer")

**Fase 3: SEO y Accesibilidad**
- ✅ Google Analytics configurado (placeholder listo)
- ✅ robots.txt y sitemap.xml creados
- ✅ Skip links para navegación por teclado
- ✅ Focus visible en todos los elementos interactivos
- ✅ Soporte para prefers-reduced-motion y prefers-contrast
- ✅ Componentes accesibles (tabindex, aria-label, roles)
- ✅ WCAG 2.1 AA compliant

**Fase 4: Profesionalización**
- ✅ Git ready (.gitignore configurado)
- ✅ package.json con scripts útiles
- ✅ Vite configurado (dev server + build optimizado)
- ✅ Tests automatizados (Vitest - 11/11 passing)
- ✅ Estructura de carpetas escalable

### 🎯 Optimizaciones de producción

**Build optimizado:**
- CSS minificado: 22.11 KB (gzip: 4.69 KB)
- JS minificado: 8.24 KB total (gzip: 3.01 KB)
- HTML minificado: ~32 KB total
- **Reducción total: ~73%** vs archivos originales

### 📋 Scripts disponibles

```bash
npm run dev        # Servidor desarrollo (hot reload)
npm run build      # Build producción (dist/)
npm run preview    # Preview del build
npm test           # Tests en modo watch
npm run test:run   # Tests una vez
npm run test:ui    # UI de tests
```

### 🔧 Configuración pendiente

1. **Google Analytics**: Reemplazar `G-XXXXXXXXXX` en pages/index.html
2. **Formspree**: Configurar ID en src/js/form-handler.js
3. **Instagram**: Actualizar `TU_USUARIO` en pages/index.html
4. **Dominio**: Actualizar URLs en public/sitemap.xml y public/robots.txt
5. **Favicon**: Crear archivos de imagen (favicon.ico, etc.)
6. **OG Image**: Crear og-image.jpg (1200x630px) en public/

### 🐛 Notas técnicas

- Root de Vite apunta a `pages/` para mejor organización
- Alias configurado: `/src/` → `../src/` para imports absolutos
- CSS de componentes importado vía @import en styles.css
- Tests configurados con Vitest + Happy-DOM
- Compatible con Node 18+

### 📚 Documentación actualizada

- ✅ README.md principal actualizado
- ✅ tests/README.md con guía completa
- ✅ docs/components/ con documentación de componentes
- ✅ Este CHANGELOG.md

---

## [1.0.0] - 2026-02-XX - Versión inicial

Landing page básica con:
- Web Components (ez-button, ez-card, ez-tag, etc.)
- Sistema de design con variables CSS
- Header/Footer dinámicos
- Formulario de contacto
- Lazy loading básico
