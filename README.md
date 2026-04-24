# IS, Art Sport - Sitio Web

Landing page moderna para IS, Art Sport - Programas de entrenamiento personalizados.

[![Tests](https://img.shields.io/badge/tests-11%20passing-brightgreen)]() [![Build](https://img.shields.io/badge/build-passing-brightgreen)]() [![License](https://img.shields.io/badge/license-private-blue)]()

---

## 🚀 Quick Start

```bash
# Instalar dependencias
npm install

# Iniciar desarrollo
npm run dev

# Build para producción
npm run build
```

Abre tu navegador en **http://localhost:8000**

---

## ✨ Características

- ✅ **Web Components** personalizados (ez-button, ez-card, ez-tag, etc.)
- ✅ **SEO optimizado** (meta tags, Open Graph, sitemap.xml, robots.txt)
- ✅ **Performance** (lazy loading, fuentes optimizadas, ~73% reducción de tamaño)
- ✅ **Formulario de contacto** con validación en tiempo real
- ✅ **Accesibilidad WCAG 2.1 AA** (skip links, focus visible, keyboard navigation)
- ✅ **Responsive design** (mobile-first)
- ✅ **Google Analytics** preparado
- ✅ **Tests automatizados** (11/11 passing)
- ✅ **Build optimizado** con Vite (CSS: 4.69 KB, JS: 3.01 KB gzip)

---

## 📚 Documentación Completa

La documentación está organizada en archivos modulares para fácil lectura:

### 🎯 Guías Esenciales
- 📁 **[Estructura del Proyecto](./readMe/estructura.md)** - Organización de carpetas y archivos
- 🛠️ **[Tecnologías Utilizadas](./readMe/tecnologias.md)** - Stack tecnológico completo
- 🎮 **[Comandos Disponibles](./readMe/comandos.md)** - Todos los comandos npm y más
- ⚙️ **[Configuración Pendiente](./readMe/configuracion-pendiente.md)** - Qué configurar antes de publicar
- 🚀 **[Guía de Despliegue](./readMe/despliegue.md)** - Cómo publicar el sitio

### 📖 Documentación Específica
- 🧪 **[Tests](./tests/README.md)** - Guía completa de testing
- 🧩 **[Componentes](./docs/components/README.md)** - Documentación de Web Components
- 📝 **[Changelog](./CHANGELOG.md)** - Historial de cambios

---

## 🎮 Comandos Principales

```bash
# Desarrollo (usa esto para trabajar)
npm run dev              # Servidor con hot reload en http://localhost:8000
npm run dev:simple       # Servidor HTTP simple alternativo

# Build para Producción
npm run build            # Compila pages/ + src/ → dist/
npm run preview          # Prueba el build en http://localhost:8080

# Testing
npm test                 # Tests en modo watch
npm run test:run         # Ejecutar tests una vez
npm run test:ui          # UI gráfica de tests
```

### 🔄 Flujo de trabajo típico:

1. **Desarrollar:** `npm run dev` → Editas en `pages/` y `src/`
2. **Compilar:** `npm run build` → Genera `dist/` optimizado
3. **Probar:** `npm run preview` → Verificas que `dist/` funciona
4. **Publicar:** Subes carpeta `dist/` a tu hosting

**[Ver todos los comandos →](./readMe/comandos.md)**
**[Ver guía paso a paso para principiantes →](./GUIA_DESARROLLO.md)**

---

## 🗂️ Estructura (Simplificada)

```
IS_web/
├── pages/          # 📄 Páginas HTML (TU CÓDIGO FUENTE)
├── src/            # 💻 Código fuente (componentes, JS, CSS)
│   ├── components/ # Web Components personalizados
│   ├── js/         # Scripts de funcionalidad
│   ├── styles/     # Estilos CSS
│   └── partials/   # Header y Footer reutilizables
├── public/         # 📦 Assets públicos (imágenes, etc.)
├── tests/          # 🧪 Tests automatizados
├── docs/           # 📚 Documentación técnica
├── readMe/         # 📖 Guías modulares
└── dist/           # 🚀 Build compilado (LO QUE SUBES AL HOSTING)
```

### 📁 Diferencia entre `pages/` + `src/` vs `dist/`

**`pages/` + `src/`** = Tu zona de trabajo (desarrollo)
- Aquí editas y modificas archivos
- Los archivos están organizados para fácil edición
- Scripts apuntan a rutas de desarrollo (`/src/...`)

**`dist/`** = Versión compilada para publicar (producción)
- Generada automáticamente con `npm run build`
- Código optimizado, minificado, comprimido
- **Incluye copia de `src/`** para que funcionen los partials
- Es la carpeta que subes a tu hosting

**⚠️ IMPORTANTE:** Nunca edites archivos en `dist/` - se sobrescriben con cada build.

**[Ver estructura completa →](./readMe/estructura.md)**

---

## 🔧 Arquitectura y Build Process

### ¿Por qué `src/` se copia a `dist/`?

Este proyecto usa un enfoque de **"partials dinámicos"** - el header y footer se cargan desde `src/partials/` mediante JavaScript (`include-layout.js`).

**Problema original:**
- `npm run build` compilaba `pages/` → `dist/`
- Pero NO copiaba la carpeta `src/`
- Resultado: Los archivos en `dist/` buscaban `/src/partials/header.html` y `/src/partials/footer.html` que no existían
- **Header y footer no se mostraban** ❌

**Solución implementada:**
- Agregamos `vite-plugin-static-copy` a la configuración de Vite
- Ahora `npm run build` copia automáticamente toda la carpeta `src/` a `dist/src/`
- Los partials se encuentran y cargan correctamente ✅

**Configuración:** Ver `vite.config.js` líneas 5-14

### Alternativas consideradas:

1. ❌ **Inline partials durante build** - Requeriría reescribir el sistema de templates
2. ❌ **Server-side rendering** - Demasiado complejo para un sitio estático
3. ✅ **Copiar src/ a dist/** - Solución simple y efectiva (elegida)

---

## 🛠️ Tecnologías

- **Frontend:** HTML5, CSS3, JavaScript ES6+
- **Components:** Web Components API (nativo)
- **Build Tool:** Vite ^5.0.0
- **Testing:** Vitest ^1.6.0 + Happy-DOM
- **Fonts:** Google Fonts (Syne + DM Sans)
- **Analytics:** Google Analytics 4 (preparado)

**Sin frameworks** - Todo vanilla JS para máxima velocidad y mínimo tamaño.

**[Ver tecnologías completas →](./readMe/tecnologias.md)**

---

## ⚙️ Configuración Pendiente

Antes de publicar, debes configurar:

1. ✏️ **Google Analytics** - Reemplazar `G-XXXXXXXXXX`
2. 📧 **Formspree** - ID del formulario de contacto
3. 📱 **Instagram** - Usuario real
4. 🌐 **Dominio** - Actualizar en sitemap.xml y robots.txt
5. 🖼️ **Favicon** - Crear archivos de imagen
6. 📷 **OG Image** - Imagen para redes sociales

**[Ver guía completa de configuración →](./readMe/configuracion-pendiente.md)**

---

## 🚀 Despliegue

### Opción 1: Netlify (Recomendado)
```bash
# Push a GitHub
git push origin main

# Netlify detecta y despliega automáticamente
```

### Opción 2: Manual
```bash
npm run build
# Subir carpeta dist/ a tu hosting
```

**[Ver guía completa de despliegue →](./readMe/despliegue.md)**

---

## 🧪 Testing

El proyecto incluye tests automatizados para validación de formularios.

```bash
npm test              # Modo watch
npm run test:run      # Ejecutar una vez
npm run test:ui       # UI gráfica
```

**Estado actual:** ✅ 11/11 tests passing

**Cobertura:**
- Validación de email
- Validación de Instagram (auto-agrega @)
- Validación de longitud de campos
- Validación completa del formulario

**[Ver documentación de tests →](./tests/README.md)**

---

## 📊 Métricas de Producción

### Tamaños (gzipped)
- **CSS:** 4.69 KB
- **JavaScript:** 3.01 KB
- **HTML:** ~10 KB (por página)
- **Total:** ~17.7 KB

### Performance
- **Build time:** ~400ms
- **Reducción total:** ~73% vs desarrollo
- **Lighthouse Score:** 90+ (objetivo)

---

## 🤝 Contribuir

Este es un proyecto privado, pero si encuentras bugs o tienes sugerencias:

1. Abre un issue
2. Describe el problema/mejora
3. Si es posible, incluye screenshots

---

## 📄 Licencia

Proyecto privado - IS, Art Sport © 2026

---

## 🆘 Ayuda

### ¿Tienes problemas?
1. Revisa la [documentación completa](./readMe/)
2. Busca en los archivos específicos del tema
3. Revisa el [troubleshooting en comandos](./readMe/comandos.md#troubleshooting)

### Recursos útiles
- [Vite Documentation](https://vitejs.dev/)
- [Vitest Documentation](https://vitest.dev/)
- [MDN Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [Web.dev - Performance](https://web.dev/performance/)

---

## 📖 Navegación de Documentación

### 🎓 Para Principiantes
- **[Guía de Desarrollo Paso a Paso](./GUIA_DESARROLLO.md)** ⭐ Empieza aquí si no tienes experiencia
- **[¿Cuál es la diferencia entre pages/, src/ y dist/?](./DIFERENCIA_CARPETAS.md)** 📁 Explicación visual simple

### Para Desarrolladores
- [Estructura del Proyecto](./readMe/estructura.md)
- [Tecnologías](./readMe/tecnologias.md)
- [Comandos](./readMe/comandos.md)
- [Componentes](./docs/components/README.md)
- [Tests](./tests/README.md)

### Para Deployment
- [Configuración Pendiente](./readMe/configuracion-pendiente.md)
- [Guía de Despliegue](./readMe/despliegue.md)
- [Changelog](./CHANGELOG.md)

---

**¿Listo para comenzar?**
- 🆕 **¿Primera vez?** → Lee [GUIA_DESARROLLO.md](./GUIA_DESARROLLO.md)
- 💻 **¿Ya sabes lo básico?** → `npm run dev` 🚀

---

_Creado con ❤️ usando Web Components, Vite y mucho café._
