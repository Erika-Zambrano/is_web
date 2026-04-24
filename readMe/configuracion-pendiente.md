# ⚙️ Configuración Pendiente

Lista de configuraciones que debes completar antes de publicar el sitio.

---

## 📊 1. Google Analytics

### ¿Qué hacer?
Reemplazar el ID placeholder por tu ID real de Google Analytics 4.

### Ubicación
`pages/index.html` (y otras páginas si lo deseas)

### Pasos
1. Ve a [analytics.google.com](https://analytics.google.com)
2. Crea una cuenta si no tienes
3. Crea una propiedad GA4
4. Obtén tu **ID de medición** (formato: `G-ABC123XYZ`)
5. Reemplaza en el HTML:

```html
<!-- Busca esta línea -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>

<!-- Y esta -->
gtag('config', 'G-XXXXXXXXXX');

<!-- Reemplaza por tu ID real -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-TU_ID_REAL"></script>
gtag('config', 'G-TU_ID_REAL');
```

### Verificación
1. Publica el sitio
2. Ve a Analytics → Tiempo real
3. Visita tu sitio
4. Deberías verte en "Tiempo real"

---

## 📧 2. Formspree (Formulario de Contacto)

### ¿Qué hacer?
Configurar el envío real de formularios.

### Ubicación
`src/js/form-handler.js`

### Pasos
1. Ve a [formspree.io](https://formspree.io)
2. Crea una cuenta gratuita
3. Crea un nuevo formulario
4. Obtén tu **Form ID** (formato: `xvojpqrk`)
5. Edita `src/js/form-handler.js`:

```javascript
// Línea 6-7
const MODO_SIMULADO = false;  // ← Cambiar a false
const FORMSPREE_ID = 'tu_id_real';  // ← Poner tu ID real
```

### Verificación
1. Completa el formulario en tu sitio
2. Envía
3. Revisa tu email
4. Deberías recibir el mensaje

### Alternativas
- **Netlify Forms** (si usas Netlify)
- **EmailJS** (similar a Formspree)
- **Backend propio** (Node.js, PHP, etc.)

---

## 📱 3. Redes Sociales

### ¿Qué hacer?
Actualizar el enlace de Instagram.

### Ubicación
`pages/index.html` (línea ~147)

### Cambio
```html
<!-- Busca -->
<a href="https://instagram.com/TU_USUARIO" ...>

<!-- Reemplaza TU_USUARIO por tu usuario real -->
<a href="https://instagram.com/isartsport" ...>
```

### Agregar más redes (opcional)
```html
<div class="contacto-redes-links">
  <a href="https://instagram.com/tu_usuario" ...>Instagram</a>
  <a href="https://facebook.com/tu_pagina" ...>Facebook</a>
  <a href="https://twitter.com/tu_usuario" ...>Twitter</a>
</div>
```

---

## 🌐 4. Dominio y SEO

### ¿Qué hacer?
Actualizar URLs placeholder por tu dominio real.

### Archivos a editar

#### `public/sitemap.xml`
```xml
<!-- Busca todas las instancias de -->
https://tudominio.com

<!-- Reemplaza por tu dominio real -->
https://isartsport.com
```

#### `public/robots.txt`
```txt
# Última línea
Sitemap: https://tudominio.com/sitemap.xml

# Reemplaza por
Sitemap: https://isartsport.com/sitemap.xml
```

#### `pages/index.html` (Open Graph)
```html
<meta property="og:url" content="https://tudominio.com">
<meta property="og:image" content="https://tudominio.com/og-image.jpg">

<!-- Reemplaza por tu dominio -->
<meta property="og:url" content="https://isartsport.com">
<meta property="og:image" content="https://isartsport.com/og-image.jpg">
```

---

## 🖼️ 5. Favicon

### ¿Qué hacer?
Crear y agregar los archivos de favicon.

### Archivos necesarios
```
public/
├── favicon.ico          (32x32 o 16x16)
├── favicon-32x32.png    (32x32)
├── favicon-16x16.png    (16x16)
└── apple-touch-icon.png (180x180)
```

### Cómo generarlos
1. Crea tu logo/icono
2. Ve a [favicon.io](https://favicon.io/favicon-converter/)
3. Sube tu imagen
4. Descarga el paquete
5. Copia los archivos a `public/`

### Referencias ya están en HTML
Las referencias ya están agregadas en todos los HTML:
```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
```

---

## 🖼️ 6. Open Graph Image

### ¿Qué hacer?
Crear imagen para compartir en redes sociales.

### Especificaciones
- **Nombre:** `og-image.jpg`
- **Ubicación:** `public/og-image.jpg`
- **Tamaño:** 1200 x 630 px
- **Formato:** JPG o PNG
- **Peso:** < 1 MB

### Contenido sugerido
- Logo de IS, Art Sport
- Tagline o frase clave
- Imagen representativa
- Colores de tu marca

### Herramientas
- [Canva](https://canva.com) - Plantillas gratis
- [Figma](https://figma.com) - Diseño profesional
- Photoshop/GIMP

### Verificación
1. Sube la imagen a `public/og-image.jpg`
2. Haz build: `npm run build`
3. Verifica en: [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
4. Ingresa tu URL
5. Verás preview de cómo se ve al compartir

---

## 📝 7. Contenido Placeholder

### ¿Qué hacer?
Reemplazar textos y contenido de ejemplo.

### Áreas a revisar

#### Textos generales
- Taglines: "TU TAGLINE EN MAYÚSCULAS"
- Descripciones de features
- Información de programas
- FAQ (preguntas frecuentes)

#### Imágenes
Todas las imágenes actualmente son de Unsplash (placeholder):
```html
<!-- Busca URLs como -->
https://images.unsplash.com/photo-...

<!-- Reemplaza con tus propias imágenes -->
```

#### Precios
Verifica que los precios en `pages/index.html` y `pages/programas.html` sean correctos.

---

## 📄 8. Documentos Legales

### ¿Qué hacer?
Crear o reemplazar documentos legales.

### Documento actual
`public/Nearpod - Lesson Builder.pdf` es un placeholder.

### Documentos necesarios
1. **Política de Privacidad** (`public/politica-privacidad.pdf`)
2. **Términos y Condiciones** (opcional)
3. **Aviso Legal** (según legislación de tu país)

### Actualizar referencia
En `pages/index.html`:
```html
<!-- Línea ~172 -->
<a href="Nearpod%20-%20Lesson%20Builder.pdf" ...>

<!-- Reemplaza por -->
<a href="/politica-privacidad.pdf" ...>
```

### Recursos
- Generadores de políticas online
- Consulta legal profesional (recomendado)
- Plantillas específicas de tu país

---

## ✅ Checklist Pre-Launch

Antes de publicar el sitio, verifica:

```
📊 Google Analytics
  [ ] ID configurado
  [ ] Verificado en Analytics > Tiempo Real

📧 Formulario
  [ ] Formspree ID configurado
  [ ] Modo simulado desactivado
  [ ] Probado envío real

📱 Redes Sociales
  [ ] Instagram actualizado
  [ ] Otras redes agregadas

🌐 SEO
  [ ] Dominio en sitemap.xml
  [ ] Dominio en robots.txt
  [ ] Open Graph URLs actualizadas

🖼️ Imágenes
  [ ] Favicon creado
  [ ] OG image creada
  [ ] Imágenes propias subidas

📝 Contenido
  [ ] Textos actualizados
  [ ] Precios verificados
  [ ] Información correcta

📄 Legal
  [ ] Política de privacidad
  [ ] Términos (si aplica)
  [ ] Enlaces actualizados

🧪 Testing
  [ ] Probado en Chrome, Firefox, Safari
  [ ] Probado en móvil
  [ ] Formulario funciona
  [ ] Links verificados
```

---

## 🔄 Proceso recomendado

1. **Local** → Configura todo en tu computadora
2. **Staging** → Sube a un dominio de prueba
3. **Testing** → Prueba exhaustivamente
4. **Producción** → Sube al dominio final
5. **Verificación** → Revisa todo funcione
6. **Google Search Console** → Registra tu sitio
7. **Monitor** → Revisa Analytics regularmente

---

[← Volver al README principal](../README.md)
