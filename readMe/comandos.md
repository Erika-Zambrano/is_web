# 🎮 Comandos

Guía completa de comandos disponibles para el proyecto IS, Art Sport.

---

## 🚀 Desarrollo

### `npm run dev`
Inicia el servidor de desarrollo con Vite.

```bash
npm run dev
```

**Características:**
- ⚡ Hot Module Replacement (cambios instantáneos)
- 🌐 Abre en http://localhost:8000
- 📱 Accesible en red local
- 🔥 Sin necesidad de refrescar el navegador

**Cuándo usar:**
- Durante desarrollo
- Para ver cambios en tiempo real
- Para probar en dispositivos móviles de la misma red

---

### `npm run dev:simple`
Servidor HTTP básico sin Vite (fallback).

```bash
npm run dev:simple
```

**Características:**
- Servidor HTTP simple
- Sin hot reload
- Más ligero
- Abre en http://localhost:8000

**Cuándo usar:**
- Si Vite da problemas
- Para testing rápido sin configuración

---

## 📦 Build (Producción)

### `npm run build`
Genera el build optimizado para producción.

```bash
npm run build
```

**Proceso:**
1. Limpia carpeta `dist/`
2. Minifica HTML, CSS, JS
3. Agrega hashes a archivos
4. Optimiza assets
5. Genera en `dist/`

**Resultado:**
- `dist/` - Carpeta lista para subir al servidor
- CSS: ~4.69 KB (gzip)
- JS: ~3.01 KB (gzip)
- Build time: ~400ms

**Cuándo usar:**
- Antes de deployar
- Para testing de producción
- Para verificar tamaño de archivos

---

### `npm run preview`
Preview del build de producción localmente.

```bash
npm run preview
```

**Características:**
- Sirve la carpeta `dist/`
- Simula entorno de producción
- Abre en http://localhost:8080

**Cuándo usar:**
- Después de `npm run build`
- Para verificar que todo funciona en producción
- Antes de deployar

---

## 🧪 Testing

### `npm test`
Ejecuta tests en modo watch.

```bash
npm test
```

**Características:**
- ♻️ Re-ejecuta al guardar cambios
- 👀 Modo interactivo
- ⚡ Rápido (solo tests afectados)

**Cuándo usar:**
- Durante desarrollo de features
- Test-Driven Development (TDD)
- Para verificar que no rompiste nada

---

### `npm run test:run`
Ejecuta todos los tests una sola vez.

```bash
npm run test:run
```

**Características:**
- Ejecuta todos los tests
- Sale cuando termina
- Perfecto para CI/CD

**Cuándo usar:**
- En pipelines de CI/CD
- Antes de commits importantes
- Para reporte rápido

---

### `npm run test:ui`
Interfaz gráfica de tests.

```bash
npm run test:ui
```

**Características:**
- 🖥️ UI web interactiva
- 📊 Visualización de resultados
- 🔍 Debugging avanzado
- 📈 Coverage reports

**Cuándo usar:**
- Para explorar tests visualmente
- Debugging de tests fallidos
- Demostrar cobertura de tests

---

## 📦 Package Management

### `npm install`
Instala todas las dependencias.

```bash
npm install
```

**Cuándo usar:**
- Primera vez que clonas el proyecto
- Después de pull con cambios en `package.json`
- Si borraste `node_modules/`

---

### `npm install <paquete>`
Instala un paquete nuevo.

```bash
# Dependencia de producción
npm install nombre-paquete

# Dependencia de desarrollo
npm install -D nombre-paquete
```

---

### `npm update`
Actualiza dependencias a versiones compatibles.

```bash
npm update
```

**Cuidado:** Puede romper cosas. Testea después.

---

## 🔍 Información y Diagnóstico

### `npm list`
Lista dependencias instaladas.

```bash
npm list
```

---

### `npm outdated`
Muestra dependencias desactualizadas.

```bash
npm outdated
```

---

### `npm audit`
Verifica vulnerabilidades de seguridad.

```bash
npm audit

# Intentar arreglar automáticamente
npm audit fix
```

---

## 🎯 Atajos útiles

### Desarrollo completo
```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar desarrollo
npm run dev

# 3. En otra terminal: tests
npm test
```

---

### Preparar para producción
```bash
# 1. Tests
npm run test:run

# 2. Build
npm run build

# 3. Preview
npm run preview
```

---

## 🔧 Comandos de sistema (sin npm)

### Ver versión de Node
```bash
node --version
```

### Ver versión de npm
```bash
npm --version
```

### Limpiar cache de npm
```bash
npm cache clean --force
```

### Reinstalar todo desde cero
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 🐛 Troubleshooting

### "Command not found: npm"
**Solución:** Instala Node.js desde [nodejs.org](https://nodejs.org)

---

### "Port 8000 is in use"
**Causa:** Otro proceso usa el puerto 8000

**Soluciones:**
1. Vite cambiará automáticamente a 8001, 8002, etc.
2. O detén el otro proceso:
```bash
# Linux/Mac
lsof -ti:8000 | xargs kill -9

# Windows
netstat -ano | findstr :8000
taskkill /PID <PID> /F
```

---

### Tests fallan después de cambios
```bash
# Limpiar y reinstalar
rm -rf node_modules
npm install
npm test
```

---

### Build falla
```bash
# Ver error completo
npm run build 2>&1 | less

# Limpiar dist/ manualmente
rm -rf dist
npm run build
```

---

## 📝 Scripts personalizados

Puedes agregar tus propios scripts en `package.json`:

```json
{
  "scripts": {
    "mi-comando": "echo 'Hola mundo'"
  }
}
```

Luego ejecutar:
```bash
npm run mi-comando
```

---

## ⚡ Tips de productividad

### Alias útiles (agrega a `.bashrc` o `.zshrc`)
```bash
alias nrd="npm run dev"
alias nrb="npm run build"
alias nrp="npm run preview"
alias nt="npm test"
```

Luego solo escribe:
```bash
nrd  # En vez de npm run dev
nrb  # En vez de npm run build
```

---

### Ejecutar múltiples comandos en paralelo
```bash
# Instalar concurrently
npm install -D concurrently

# Agregar script
"dev:full": "concurrently \"npm run dev\" \"npm test\""
```

---

[← Volver al README principal](../README.md)
