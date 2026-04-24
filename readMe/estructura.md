# 📁 Estructura del Proyecto

Organización del proyecto IS, Art Sport por carpetas funcionales.

---

## 📂 Árbol de directorios

```
IS_web/
├── pages/                  # 📄 Páginas HTML
│   ├── index.html          # Página principal
│   ├── programas.html      # Programas de entrenamiento
│   ├── quienes-somos.html  # Acerca de
│   ├── como-trabajamos.html # Metodología
│   ├── preguntas.html      # FAQ
│   └── contacto.html       # Formulario de contacto
│
├── src/                    # 💻 Código fuente
│   ├── components/         # Web Components
│   │   ├── index.js        # Loader de componentes
│   │   ├── ez-button.js    # Componente botón
│   │   ├── ez-card.js      # Componente tarjeta
│   │   ├── ez-tag.js       # Componente etiqueta
│   │   ├── ez-section-title.js
│   │   └── ez-container.js
│   │
│   ├── js/                 # Scripts
│   │   ├── include-layout.js  # Carga header/footer
│   │   ├── form-handler.js    # Validación formulario
│   │   ├── lazy-images.js     # Lazy loading
│   │   └── main.js            # Scripts generales
│   │
│   ├── styles/             # Estilos CSS
│   │   ├── styles.css      # Estilos globales y design system
│   │   └── components.css  # Estilos de componentes
│   │
│   └── partials/           # HTML compartido
│       ├── header.html     # Header
│       └── footer.html     # Footer
│
├── public/                 # 📦 Assets públicos estáticos
│   ├── robots.txt          # SEO - Instrucciones para bots
│   ├── sitemap.xml         # SEO - Mapa del sitio
│   └── *.pdf               # Documentos públicos
│
├── docs/                   # 📚 Documentación
│   └── components/         # Docs de componentes
│
├── tests/                  # 🧪 Tests automatizados
│   ├── setup.js            # Configuración de tests
│   ├── form-validation.test.js
│   └── README.md
│
├── readMe/                 # 📖 Documentación modular
│   ├── estructura.md       # Este archivo
│   ├── tecnologias.md
│   ├── comandos.md
│   └── ...
│
├── dist/                   # 🚀 Build output (generado, no editar)
├── node_modules/           # Dependencias (generado)
│
├── package.json            # Dependencias y scripts
├── vite.config.js          # Configuración de Vite
├── vitest.config.js        # Configuración de tests
├── .gitignore              # Archivos ignorados por Git
├── CHANGELOG.md            # Historial de cambios
└── README.md               # Documentación principal
```

---

## 📄 Descripción de carpetas

### `pages/` - Páginas HTML
Contiene todas las páginas del sitio web. Cada archivo HTML es una página independiente.

**¿Por qué separado?**
- Fácil de encontrar todas las páginas
- Vite usa esta carpeta como root
- Separación clara entre contenido y código

---

### `src/` - Código fuente

#### `src/components/`
Web Components personalizados reutilizables.

**Archivos clave:**
- `index.js` - Importa y registra todos los componentes
- `ez-*.js` - Cada componente en su propio archivo

**Ver más:** `docs/components/README.md`

#### `src/js/`
Scripts JavaScript del proyecto.

- `include-layout.js` - Carga header/footer dinámicamente
- `form-handler.js` - Validación y envío del formulario
- `lazy-images.js` - Lazy loading con IntersectionObserver
- `main.js` - Funcionalidad general (scroll, menú móvil)

#### `src/styles/`
Archivos CSS organizados.

- `styles.css` - Design system, variables, estilos globales
- `components.css` - Estilos de Web Components

**Nota:** `components.css` se importa dentro de `styles.css` via `@import`

#### `src/partials/`
Fragmentos HTML compartidos entre páginas.

- `header.html` - Navegación y logo
- `footer.html` - Footer del sitio

---

### `public/` - Assets públicos
Archivos estáticos que se copian tal cual al build.

**Contenido:**
- SEO: robots.txt, sitemap.xml
- Documentos: PDFs, políticas de privacidad
- Futuros: favicon, og-image.jpg

---

### `docs/` - Documentación
Documentación técnica del proyecto.

- `components/` - Documentación de Web Components

---

### `tests/` - Tests automatizados
Suite de tests con Vitest.

**Ver más:** `tests/README.md`

---

### `readMe/` - Documentación modular
Documentación separada en archivos temáticos para fácil lectura.

---

### `dist/` - Build de producción
**⚠️ Carpeta generada - NO EDITAR MANUALMENTE**

Resultado del comando `npm run build`. Esta carpeta contiene:
- HTML minificado
- CSS y JS optimizados y con hash
- Assets copiados de `public/`

**Se regenera** cada vez que corres `npm run build`.

---

## 🔍 Convenciones de nombres

### Archivos HTML
- Kebab-case: `como-trabajamos.html`
- Descriptivo del contenido

### Componentes
- Prefijo `ez-`: `ez-button.js`, `ez-card.js`
- Kebab-case en nombre de archivo
- CamelCase en clase: `EzButton`, `EzCard`

### Estilos
- Descriptivos: `styles.css`, `components.css`
- Un archivo por propósito

### Scripts
- Descriptivos de funcionalidad: `form-handler.js`, `lazy-images.js`
- Kebab-case

---

## 📦 Flujo de archivos

### Desarrollo
```
pages/index.html
  ↓ importa
src/styles/styles.css
src/components/index.js
src/js/*.js
  ↓ usa
src/partials/header.html
src/partials/footer.html
```

### Producción (build)
```
npm run build
  ↓ procesa
pages/ + src/ + public/
  ↓ genera
dist/
  ├── index.html (minificado)
  ├── assets/*.css (minificado + hash)
  ├── assets/*.js (minificado + hash)
  └── robots.txt, sitemap.xml (copiados)
```

---

## 🎯 ¿Dónde va cada cosa?

| Tipo de archivo | Ubicación |
|-----------------|-----------|
| Página nueva | `pages/` |
| Componente nuevo | `src/components/` |
| Script nuevo | `src/js/` |
| CSS nuevo | `src/styles/` |
| Partial HTML | `src/partials/` |
| Documento público | `public/` |
| Test nuevo | `tests/` |
| Documentación | `docs/` o `readMe/` |

---

## 🔄 Migraciones futuras

Si el proyecto crece, considera:
- `src/utils/` - Funciones de utilidad
- `src/hooks/` - Custom hooks (si agregas framework)
- `src/assets/` - Imágenes locales
- `src/styles/pages/` - CSS específico por página
- `src/api/` - Llamadas a APIs

---

[← Volver al README principal](../README.md)
