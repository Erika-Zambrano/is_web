# 🎓 Guía de Desarrollo - IS, Art Sport
## Para principiantes en desarrollo web

Esta guía explica **paso a paso** cómo trabajar con este proyecto, sin asumir conocimiento previo.

---

## 📚 Índice

1. [Conceptos Básicos](#-conceptos-básicos)
2. [Primer Inicio](#-primer-inicio)
3. [Cómo Hacer Cambios](#-cómo-hacer-cambios)
4. [Guardar y Compilar](#-guardar-y-compilar)
5. [Problemas Comunes](#-problemas-comunes)
6. [Glosario de Términos](#-glosario-de-términos)

---

## 🧠 Conceptos Básicos

### ¿Qué es este proyecto?

Este proyecto es un **sitio web** que se crea usando archivos HTML, CSS y JavaScript. No uses Word o editores de texto normal - necesitas un **editor de código** como VS Code o Cursor.

### Las 3 carpetas importantes:

```
📂 IS_web/
  ├── 📁 pages/     ← AQUÍ EDITAS LOS HTML (inicio, contacto, etc.)
  ├── 📁 src/       ← AQUÍ EDITAS TODO LO DEMÁS (estilos, scripts, header, footer)
  └── 📁 dist/      ← NO TOCAR - se genera automáticamente
```

**📖 Lee más:** [DIFERENCIA_CARPETAS.md](./DIFERENCIA_CARPETAS.md) tiene una explicación visual completa.

### Regla de oro:

- ✅ **SÍ editas:** archivos en `pages/` y `src/`
- ❌ **NO editas:** archivos en `dist/`
- 💡 **Por qué:** Cada vez que compilas, `dist/` se regenera y pierde tus cambios

---

## 🚀 Primer Inicio

### Paso 1: Abrir terminal

**¿Qué es la terminal?**
Es una ventana donde escribes comandos de texto. En tu editor de código (VS Code/Cursor):

- Presiona: `Ctrl + J` (Windows/Linux) o `Cmd + J` (Mac)
- O busca en el menú: `Ver → Terminal`

### Paso 2: Verificar ubicación

En la terminal, escribe:

```bash
pwd
```

Deberías ver algo como: `/home/tu-usuario/Documents/IS/IS_web`

**Si no estás en esa carpeta:**

```bash
cd /home/tu-usuario/Documents/IS/IS_web
```

### Paso 3: Instalar dependencias (solo la primera vez)

```bash
npm install
```

**¿Qué hace esto?** Descarga todas las herramientas que necesita el proyecto. Solo lo haces UNA vez (o cuando alguien agregue nuevas herramientas).

### Paso 4: Iniciar el servidor de desarrollo

```bash
npm run dev
```

**¿Qué pasa aquí?**
- Se abre tu navegador automáticamente
- Verás tu sitio en: `http://localhost:8000`
- La terminal muestra: `➜  Local:   http://localhost:8000/`

**⚠️ IMPORTANTE:** No cierres la terminal - déjala abierta mientras trabajas.

---

## ✏️ Cómo Hacer Cambios

### Cambiar el contenido de una página

**Ejemplo: Quiero cambiar el título de inicio**

1. **Abre:** `pages/index.html`
2. **Busca:** la línea que dice `<h1 class="hero-title">IS, Art Sport</h1>`
3. **Cambia:** el texto entre `>` y `</h1>` por lo que quieras
4. **Guarda:** `Ctrl + S` (Windows/Linux) o `Cmd + S` (Mac)
5. **Mira tu navegador:** El cambio aparece automáticamente (si no, presiona `F5`)

### Cambiar el header o footer

El header (menú de arriba) y el footer (pie de página) aparecen en **todas las páginas**.

**Para editarlos:**

1. **Header:** Abre `src/partials/header.html`
2. **Footer:** Abre `src/partials/footer.html`
3. Haz tus cambios y guarda con `Ctrl + S`
4. Recarga el navegador con `F5`

**Ejemplo - Cambiar el logo:**
```html
<!-- En src/partials/header.html -->
<a href="index.html" class="logo">IS, Art Sport</a>
<!-- Cambia "IS, Art Sport" por tu texto -->
```

**Ejemplo - Agregar un link al menú:**
```html
<!-- En src/partials/header.html -->
<nav class="nav">
  <a href="index.html">Inicio</a>
  <a href="quienes-somos.html">Quiénes somos</a>
  <!-- Agrega aquí tu nuevo link: -->
  <a href="nueva-pagina.html">Nueva Página</a>
</nav>
```

### Cambiar estilos (colores, tamaños, fuentes)

**Archivo principal de estilos:** `src/styles/styles.css`

**Ejemplo - Cambiar el color principal:**

1. Abre `src/styles/styles.css`
2. Busca al inicio (líneas 1-20) donde dice `:root {`
3. Verás algo como:
```css
:root {
  --primary: #ff6b6b;     /* Color principal */
  --accent: #4ecdc4;      /* Color de acento */
  --text: #2d2d2d;        /* Color del texto */
}
```
4. Cambia los códigos de color (son valores hexadecimales)
5. Guarda con `Ctrl + S`
6. El navegador actualiza automáticamente

**💡 Tip:** Busca "color picker online" en Google para elegir colores fácilmente.

### Cambiar funcionalidad (JavaScript)

**Archivos de funcionalidad:** `src/js/`

**Archivos principales:**
- `main.js` - Funcionalidad general (menú móvil, etc.)
- `form-handler.js` - Validación del formulario de contacto
- `include-layout.js` - Carga header y footer (no tocar a menos que sepas lo que haces)

**⚠️ Advertencia:** Si no tienes experiencia con JavaScript, mejor pide ayuda antes de modificar estos archivos.

---

## 💾 Guardar y Compilar

### Mientras desarrollas:

**NO necesitas compilar** - con `npm run dev` los cambios se ven instantáneamente.

### Cuando termines de trabajar:

#### Paso 1: Detener el servidor

En la terminal donde corre `npm run dev`:
- Presiona `Ctrl + C`
- Confirma si te pregunta (escribe `y` y Enter)

#### Paso 2: Compilar para producción

```bash
npm run build
```

**¿Qué hace esto?**
- Lee todos tus archivos de `pages/` y `src/`
- Los optimiza (hace más pequeños y rápidos)
- Los guarda en `dist/`
- Copia `src/` completa a `dist/src/` (para que funcionen header y footer)

**Resultado:** La carpeta `dist/` ahora tiene tu sitio listo para publicar.

#### Paso 3: Probar el build (opcional pero recomendado)

```bash
npm run preview
```

Esto abre tu sitio compilado en `http://localhost:8080` - así verificas que todo funciona antes de publicar.

**¿Qué verificar?**
- ✅ El header y footer se ven correctamente
- ✅ Todos los links funcionan
- ✅ El formulario de contacto funciona
- ✅ Los estilos se ven bien

**Cuando termines:** Presiona `Ctrl + C` en la terminal.

---

## 🔧 Problemas Comunes

### "El servidor no inicia"

**Error:** `npm: command not found` o `npm run dev no funciona`

**Solución:** No tienes Node.js instalado.
1. Ve a: https://nodejs.org/
2. Descarga la versión LTS (recomendada)
3. Instálalo
4. Cierra y abre de nuevo la terminal
5. Intenta de nuevo: `npm install` luego `npm run dev`

---

### "Hice cambios pero no se ven en el navegador"

**Soluciones:**

1. **Guardaste el archivo?** Presiona `Ctrl + S` para guardar
2. **Recarga el navegador:** Presiona `F5` o `Ctrl + R`
3. **Recarga sin caché:** Presiona `Ctrl + Shift + R` (fuerza una recarga limpia)
4. **¿El servidor está corriendo?** Verifica que `npm run dev` esté activo en la terminal

---

### "No veo el header o footer"

**Causa:** El build no incluyó los partials o estás abriendo archivos sin servidor.

**Soluciones:**

1. **En desarrollo:** Asegúrate de usar `npm run dev` (no abras index.html con doble clic)
2. **Después del build:** Usa `npm run preview` (no abras dist/index.html con doble clic)
3. **Si nada funciona:** Haz un build fresco:
   ```bash
   npm run build
   npm run preview
   ```

---

### "La terminal dice 'port already in use' o 'puerto en uso'"

**Causa:** Ya hay un servidor corriendo en ese puerto.

**Solución:**

1. Busca otra terminal/ventana donde esté corriendo `npm run dev`
2. Presiona `Ctrl + C` ahí
3. Intenta de nuevo

**O encuentra y mata el proceso:**

```bash
# Linux/Mac
lsof -ti:8000 | xargs kill -9

# Windows
netstat -ano | findstr :8000
# Anota el PID y luego:
taskkill /PID [número] /F
```

---

### "Error al compilar: ENOENT file not found"

**Causa:** Algún archivo que el proyecto busca no existe.

**Solución:**

1. Lee el error - te dice qué archivo falta
2. Verifica que ese archivo existe en la ruta correcta
3. Si borraste algo por error, usa `git checkout` para recuperarlo (si usas git)

---

### "Los estilos CSS no se aplican"

**Verificaciones:**

1. **¿El archivo CSS existe?** Revisa que `src/styles/styles.css` esté ahí
2. **¿Está linkeado en tu HTML?** Busca en tu HTML:
   ```html
   <link rel="stylesheet" href="/src/styles/styles.css">
   ```
3. **¿Hay errores de sintaxis?** Un `;` faltante o `}` de más puede romper todo el CSS
4. **Recarga sin caché:** `Ctrl + Shift + R` en el navegador

---

## 📖 Glosario de Términos

### Términos técnicos explicados simple:

**Terminal / Consola:**
Ventana donde escribes comandos de texto. Como un chat con tu computadora.

**npm (Node Package Manager):**
Programa que instala herramientas para tu proyecto. Piensa en él como una "tienda de apps" para desarrollo.

**Comando:**
Instrucción que escribes en la terminal. Ejemplo: `npm run dev`

**Servidor de desarrollo (dev server):**
Programa que muestra tu sitio web en tu navegador mientras trabajas. Se actualiza automáticamente con tus cambios.

**Build / Compilar:**
Proceso de tomar tus archivos originales y convertirlos en versión optimizada para publicar.

**Producción:**
Versión final de tu sitio que los usuarios ven en internet.

**Localhost:**
Dirección especial (`http://localhost:8000`) que apunta a tu propia computadora. Solo tú la ves.

**Hot Reload / Recarga en caliente:**
Cuando el navegador actualiza automáticamente al guardar cambios. No necesitas presionar F5.

**Caché:**
Memoria del navegador que guarda archivos viejos. A veces necesitas limpiarlo con `Ctrl + Shift + R`.

**Port / Puerto:**
Número que identifica un servidor (ejemplo: `:8000`). Como el número de un apartamento.

**Minificar:**
Comprimir código para hacerlo más pequeño. Elimina espacios, acorta nombres de variables, etc.

**Gzip:**
Forma de comprimir archivos para que carguen más rápido en internet.

**HTML:**
Lenguaje que estructura el contenido (títulos, párrafos, links, etc.)

**CSS:**
Lenguaje que define la apariencia (colores, tamaños, posiciones)

**JavaScript (JS):**
Lenguaje que agrega funcionalidad e interactividad (menús, formularios, animaciones)

**Partials:**
Fragmentos de código reutilizables. El header y footer son partials que aparecen en todas las páginas.

**Web Components:**
Elementos HTML personalizados que creaste (como `<ez-button>`, `<ez-card>`). Se comportan como HTML normal.

**Vite:**
Herramienta que ayuda a desarrollar más rápido y compila tu proyecto. Es tu "asistente de build".

**dist/ (distribution):**
Carpeta que contiene tu sitio compilado, listo para publicar.

**src/ (source):**
Carpeta que contiene tu código fuente original.

---

## 🎯 Resumen del Flujo de Trabajo

### Cada vez que trabajas:

```bash
# 1. Abre terminal en la carpeta del proyecto
cd /ruta/a/IS_web

# 2. Inicia el servidor
npm run dev

# 3. Edita archivos en pages/ y src/

# 4. Guarda con Ctrl+S (los cambios se ven automáticamente)

# 5. Cuando termines:
Ctrl+C  # Detener servidor
```

### Cuando quieras publicar:

```bash
# 1. Compila
npm run build

# 2. Prueba que funciona
npm run preview

# 3. Si todo está bien, sube la carpeta dist/ a tu hosting
```

---

## 📞 ¿Necesitas Más Ayuda?

### Documentación adicional:

- **[README.md](./README.md)** - Documentación técnica completa
- **[readMe/comandos.md](./readMe/comandos.md)** - Todos los comandos disponibles
- **[readMe/estructura.md](./readMe/estructura.md)** - Explicación detallada de carpetas

### Recursos para aprender:

- **HTML:** https://www.w3schools.com/html/
- **CSS:** https://www.w3schools.com/css/
- **JavaScript básico:** https://javascript.info/
- **Terminal/Línea de comandos:** https://ubuntu.com/tutorials/command-line-for-beginners

---

## ✅ Checklist antes de publicar:

Antes de subir tu sitio a internet, verifica:

- [ ] Probé todos los links y funcionan
- [ ] El formulario de contacto tiene el ID de Formspree correcto
- [ ] Cambié el ID de Google Analytics (si lo uso)
- [ ] Las imágenes cargan correctamente
- [ ] El sitio se ve bien en móvil (abre Chrome DevTools con F12 → icono de celular)
- [ ] Hice `npm run build` y probé con `npm run preview`
- [ ] La carpeta `dist/` es la que voy a subir (no pages/ ni src/)

---

**¿Listo para empezar?**

1. Abre la terminal
2. Escribe: `npm run dev`
3. ¡A editar!

Si algo no funciona, revisa la sección [Problemas Comunes](#-problemas-comunes) ⬆️

---

_Esta guía fue creada para que cualquiera pueda trabajar en el proyecto, sin importar su nivel de experiencia. Si algo no está claro, ¡mejora esta guía!_
