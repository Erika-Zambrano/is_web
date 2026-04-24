# Guía de Diseño — IS, Art Sport

Documento para la diseñadora gráfica. Aquí se especifica exactamente qué entregar y en qué formato, para que los cambios puedan aplicarse directamente al código sin ambigüedad.

---

## Cómo usar esta guía

1. La diseñadora completa cada sección con los valores concretos.
2. Me pasa el documento relleno (o los archivos indicados).
3. Yo aplico los cambios al código.

Todo lo marcado con `[ ]` es un campo a rellenar. Lo marcado con `→` indica a qué variable o archivo va cada valor.

---

## 1. Paleta de colores

Entregar cada color en formato **HEX** (ej: `#E84B7A`).

| Campo | Descripción | Variable en código | Valor actual |
|---|---|---|---|
| Fondo principal | Color de fondo de toda la página | `--bg` | `#ffffff` |
| Fondo suave | Fondo de secciones con ligero contraste | `--bg-soft` | `#f5f3ff` |
| Superficie | Fondo de cards y formularios | `--surface` | `#f0ecff` |
| Texto principal | Color del texto normal | `--text` | `#1a1030` |
| Texto secundario | Texto de menor jerarquía, subtítulos, labels | `--text-muted` | `#6b5b8a` |
| Acento principal | Botones primarios, links, elementos destacados | `--accent` | `#E84B7A` |
| Acento hover | El mismo acento al pasar el cursor | `--accent-hover` | `#f06090` |
| Acento suave | Versión traslúcida del acento (fondos de badges) | `--accent-soft` | `rgba(232,75,122,0.12)` |
| Acento secundario | Color de apoyo (éxito, detalles) | `--accent-secondary` | `#00C9A7` |
| Borde | Color de bordes de cards y separadores | `--border` | `#e0d8f5` |
| Error | Mensajes de error en formularios | `--color-error` | `#f87171` |

> **Nota técnica:** los colores `--accent` y `--accent-hover` también se aplican automáticamente a los botones de Shoelace (la librería de componentes UI). No hace falta especificar los botones por separado.

---

## 2. Tipografía

### Fuentes

| Campo | Descripción | Variable en código | Valor actual |
|---|---|---|---|
| Fuente de titulares | H1, H2, H3, logotipo | `--font-head` | `Syne` (Google Fonts) |
| Fuente de cuerpo | Párrafos, botones, labels | `--font-body` | `DM Sans` (Google Fonts) |

**Si se cambian las fuentes**, indicar:
- Nombre exacto en Google Fonts (ej: `Inter`, `Playfair Display`)
- Pesos necesarios (ej: 400, 600, 700, 800)

### Escala tipográfica

No es necesario cambiarla. Si se quiere ajustar algún tamaño específico, indicar:
- Qué elemento (ej: "título del hero", "texto de cards")
- Tamaño en `rem` o `px`

---

## 3. Imágenes

### Logotipo

| Campo | Formato | Dónde va |
|---|---|---|
| Logo principal (claro) | SVG o PNG con fondo transparente | Header y footer |
| Logo alternativo (oscuro) | SVG o PNG con fondo transparente | Opcional, para fondos claros |

Tamaño recomendado: mínimo 200px de ancho, resolución @2x para pantallas retina.

---

### Imágenes por sección

#### Página principal (`index.html`)

| Sección | Campo | Tamaño recomendado | Formato |
|---|---|---|---|
| Hero (fondo) | Imagen de fondo de la sección principal | 1920×1080px mínimo | JPG/WebP |
| Programa 1 (card) | Foto del plan Mensual | 600×450px | JPG/WebP |
| Programa 2 (card) | Foto del plan Acceso Autónomo | 600×450px | JPG/WebP |
| Programa 3 (card) | Foto del plan Implementación Supervisada | 600×450px | JPG/WebP |
| Programa 4 (card) | Foto del plan Preparación Personalizada | 600×450px | JPG/WebP |

#### Página Quiénes somos (`quienes-somos.html`)

Hay **2 columnas**, cada una con **2 fotos** (la segunda aparece al hacer hover).

| Campo | Tamaño recomendado | Formato |
|---|---|---|
| Persona 1 — foto principal | 400×600px | JPG/WebP |
| Persona 1 — foto hover | 400×600px | JPG/WebP |
| Persona 2 — foto principal | 400×600px | JPG/WebP |
| Persona 2 — foto hover | 400×600px | JPG/WebP |

---

## 4. Textos e iconos

Los textos actuales son placeholders. La diseñadora puede proponer copys o dejarlos para otra iteración. Si se cambian, indicar:

- **Tagline del hero** (actualmente: "TU TAGLINE EN MAYÚSCULAS")
- **Descripción del hero** (actualmente: "Descripción breve...")
- **Nombres de los programas** (actualmente: Mensual, Acceso Autónomo, etc.)
- **Textos de las cards "Cómo trabajamos"** (actualmente: Feature uno, dos, tres)

Si se usan iconos, indicar nombre del pack (ej: Phosphor, Heroicons) o entregar SVGs individuales.

---

## 5. Componentes UI existentes

La página ya usa estos componentes. La diseñadora puede proponer variantes de estilo pero la estructura es fija:

| Componente | Descripción | Dónde aparece |
|---|---|---|
| `sl-button` primary | Botón principal coral | Hero, páginas de programas |
| `sl-button` outline | Botón secundario con borde | Hero |
| `sl-card` | Card con borde y fondo suave | Sección "Cómo trabajamos" |
| `ez-section-title` | Título centrado de sección | Inicio de cada sección |
| `ez-tag` / `sl-badge` | Etiqueta tipo pill | Disponible, sin uso activo aún |

---

## 6. Páginas del sitio

| Página | Archivo | Descripción |
|---|---|---|
| Inicio | `pages/index.html` | Hero + Programas + Cómo trabajamos + Contacto |
| Programas | `pages/programas.html` | Cards de planes + tabla comparativa |
| Quiénes somos | `pages/quienes-somos.html` | Fotos y textos del equipo |
| Cómo trabajamos | `pages/como-trabajamos.html` | 3 cards con metodología |
| Preguntas frecuentes | `pages/preguntas.html` | Acordeón de FAQs |
| Contacto | `pages/contacto.html` | Formulario de contacto |

---

## 7. Cómo entregar los cambios

### Opción A — Documento rellenado
Completar este mismo archivo con los valores y enviarlo. Yo aplico cada cambio en el código.

### Opción B — Archivo de tokens
Entregar un archivo `tokens.json` o similar con formato:
```json
{
  "--bg": "#ffffff",
  "--accent": "#E84B7A",
  "--font-head": "Syne",
  ...
}
```

### Opción C — Figma / Adobe
Compartir el archivo de diseño. Yo extraigo los valores de los estilos globales.

### Imágenes
Comprimir antes de entregar (recomendado: [Squoosh](https://squoosh.app/)). Nombrar con guión bajo y en minúsculas: `hero-fondo.jpg`, `programa-mensual.jpg`, etc.

---

## 8. Lo que NO hace falta especificar

- Márgenes y espaciados internos (están definidos en el código)
- Bordes redondeados (se controlan con `--radius` y `--radius-lg`)
- Animaciones y transiciones (ya implementadas)
- Layout de las secciones (estructura HTML fija, no cambia)
