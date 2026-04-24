# Component Library (ez-*)

Biblioteca base de componentes reutilizables para la landing y futuras páginas. Usa **Web Components** (custom elements) y los tokens de diseño en `styles.css`.

## Uso

Incluir en tu HTML:

```html
<link rel="stylesheet" href="components/components.css">
<script type="module" src="components/index.js"></script>
```

---

## Componentes

### ez-button

Botón o enlace con variantes.

| Atributo  | Valores              | Default   |
|-----------|----------------------|-----------|
| `variant` | `primary`, `ghost`   | `primary` |
| `size`    | `normal`, `large`    | `normal`  |
| `href`    | URL                  | —         |

Si defines `href`, se renderiza como `<a>`; si no, como `<button>`.

```html
<ez-button variant="primary">Guardar</ez-button>
<ez-button href="#cta" variant="primary" size="large">Empezar</ez-button>
<ez-button variant="ghost">Saber más</ez-button>
```

---

### ez-tag

Etiqueta tipo pill (badge).

```html
<ez-tag>Bienvenido</ez-tag>
<ez-tag>Nuevo</ez-tag>
```

---

### ez-card

Tarjeta con contenido. Opcional: label flotante y modo hover.

| Atributo      | Descripción |
|---------------|-------------|
| `label`       | Texto del label (ej. "Preview") |
| `interactive` | Si está presente, hover con borde y ligera elevación |

```html
<ez-card label="Preview">
  <div class="hero-card-placeholder"></div>
</ez-card>

<ez-card interactive>
  <span class="feature-icon">01</span>
  <h3>Título</h3>
  <p>Descripción.</p>
</ez-card>
```

---

### ez-section-title

Título de sección (h2 con estilo del design system).

```html
<ez-section-title>Qué ofrecemos</ez-section-title>
```

---

### ez-container

Contenedor con ancho máximo y padding lateral.

| Atributo | Valores                    | Default   |
|----------|----------------------------|-----------|
| `size`   | `default`, `narrow`, `wide` | `default` |

- `default`: max-width 64rem  
- `narrow`: 36rem  
- `wide`: 80rem  

```html
<ez-container>
  <p>Contenido centrado y limitado en ancho.</p>
</ez-container>
<ez-container size="narrow">...</ez-container>
```
