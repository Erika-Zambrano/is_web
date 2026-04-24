# 📁 Diferencia entre `pages/`, `src/` y `dist/`

## Explicación Visual Simple

Esta es la confusión más común. Aquí está la respuesta clara:

---

## 🎨 Durante el DESARROLLO

```
TU ZONA DE TRABAJO:

📂 pages/
  ├── index.html          ← Editás AQUÍ
  ├── programas.html
  ├── contacto.html
  └── ...

📂 src/
  ├── components/         ← Editás AQUÍ
  ├── js/                 ← Editás AQUÍ
  ├── styles/             ← Editás AQUÍ
  └── partials/           ← Editás AQUÍ
      ├── header.html
      └── footer.html

📂 dist/                  ← NO TOCAR (ignorar durante desarrollo)
```

### Comando: `npm run dev`

**Qué pasa:**
- Levanta servidor en `http://localhost:8000`
- Sirve archivos de `pages/` y `src/` en tiempo real
- Cuando guardas un archivo (Ctrl+S), el navegador actualiza automáticamente
- **NO genera ni usa `dist/`**

---

## 🚀 Para PRODUCCIÓN (publicar)

```
DESPUÉS DE COMPILAR:

📂 dist/                  ← Carpeta que SUBES al hosting
  ├── index.html          ← Versión COMPILADA de pages/index.html
  ├── programas.html      ← Versión COMPILADA
  ├── contacto.html       ← Versión COMPILADA
  ├── assets/             ← CSS y JS optimizados y con hash
  │   ├── main.C7ejHpdH.js
  │   └── include-layout.BvdNZpOd.css
  └── src/                ← COPIA de tu carpeta src/ original
      └── partials/       ← Necesario para header/footer
          ├── header.html
          └── footer.html
```

### Comando: `npm run build`

**Qué pasa:**
1. Lee todos los archivos de `pages/` y `src/`
2. Optimiza, minifica, comprime
3. Genera versión compilada en `dist/`
4. **Copia `src/` completa a `dist/src/`** (para que funcionen los partials)

**Resultado:** `dist/` es una carpeta auto-contenida lista para subir a internet.

---

## 🔄 El Flujo Completo

```
┌─────────────┐
│  TÚ EDITAS  │
│  pages/     │
│  src/       │
└──────┬──────┘
       │
       │ Guardas (Ctrl+S)
       ↓
┌─────────────┐
│npm run dev  │  ← Modo desarrollo
│localhost:   │    (ves cambios inmediatos)
│   8000      │
└─────────────┘

       │
       │ Cuando terminas
       ↓
┌─────────────┐
│npm run build│  ← Compilar
└──────┬──────┘
       │
       ↓
┌─────────────┐
│   dist/     │  ← Carpeta generada
│ (optimizado)│
└──────┬──────┘
       │
       ↓
┌─────────────┐
│npm run      │  ← Probar build localmente
│  preview    │    (localhost:8080)
└──────┬──────┘
       │
       │ Si todo funciona bien
       ↓
┌─────────────┐
│  HOSTING    │  ← Subes dist/ a tu servidor
│ (Netlify,   │
│  Vercel,    │
│  etc.)      │
└─────────────┘
```

---

## ❓ Preguntas Frecuentes

### ¿Por qué no puedo editar solo en `dist/`?

Porque `dist/` se **borra y regenera** cada vez que corres `npm run build`. Cualquier cambio que hagas en `dist/` se perderá.

**Analogía:** Es como la impresión de un documento. Puedes editar el documento original (pages/src/), pero no tiene sentido marcar con lápiz la fotocopia (dist/) porque cada vez que imprimes sale una nueva copia.

---

### ¿Por qué tengo que compilar? ¿No puedo subir `pages/` y `src/` directo?

**Técnicamente sí podrías**, pero perderías:

❌ **Velocidad:** Los archivos compilados son 70% más pequeños
❌ **Optimización:** No se minifica ni comprime
❌ **Compatibilidad:** Los navegadores viejos podrían tener problemas
❌ **Caché:** Sin hash en nombres de archivos, el caché puede mostrar versiones viejas

**En resumen:** Compilar hace tu sitio mucho más rápido y profesional.

---

### ¿Por qué `dist/` tiene una carpeta `src/` adentro?

Porque tu `include-layout.js` (el script que carga header y footer) hace:

```javascript
fetch('/src/partials/header.html')  // Busca esta ruta
fetch('/src/partials/footer.html')
```

**Si `dist/` no tuviera `src/`:**
- El navegador buscaría `/src/partials/header.html`
- No la encontraría
- No se vería el header ni el footer

**Solución:** Copiar `src/` completa a `dist/src/` durante el build (ya está configurado).

---

### ¿Cuándo veo cambios de `pages/` y cuándo de `dist/`?

| Comando | Qué carpeta sirve | Cuándo usar |
|---------|-------------------|-------------|
| `npm run dev` | `pages/` + `src/` | **Siempre que estés desarrollando** |
| `npm run preview` | `dist/` | Después de `npm run build` para probar |
| Abrir archivo directo | ❌ No funciona bien | Nunca (usa los comandos de arriba) |

---

### Si edito `src/partials/header.html`, ¿tengo que hacer algo especial?

**En desarrollo (`npm run dev`):**
- Edita, guarda (Ctrl+S), recarga navegador (F5)
- **NO necesitas compilar**

**Para publicar:**
- Cuando termines todos los cambios: `npm run build`
- Esto actualiza automáticamente `dist/src/partials/header.html`

---

### ¿Cómo sé si estoy trabajando en la carpeta correcta?

**✅ Correcto:**
- Editor muestra: `pages/index.html` o `src/partials/header.html`
- Ruta del archivo empieza con `/home/.../IS_web/pages/` o `/home/.../IS_web/src/`

**❌ Incorrecto:**
- Editor muestra: `dist/index.html` o `dist/src/partials/header.html`
- Ruta del archivo empieza con `/home/.../IS_web/dist/`

---

## 🎯 Regla Simple para Recordar

```
┌────────────────────────────────┐
│  EDITO      →  pages/ y src/   │
│  COMPILO    →  npm run build   │
│  PUBLICO    →  dist/           │
└────────────────────────────────┘
```

**Nunca edites `dist/` directamente.**

---

## 📚 Más Información

- **Guía paso a paso:** [GUIA_DESARROLLO.md](./GUIA_DESARROLLO.md)
- **Documentación técnica:** [README.md](./README.md)
- **Todos los comandos:** [readMe/comandos.md](./readMe/comandos.md)

---

**¿Todavía confundido?** Lee [GUIA_DESARROLLO.md](./GUIA_DESARROLLO.md) desde el principio - explica todo sin asumir conocimientos previos.
