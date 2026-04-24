# 🚀 Despliegue (Deployment)

Guía para publicar tu sitio web en producción.

---

## 📋 Pre-requisitos

Antes de deployar, asegúrate de:

✅ Completar todas las [configuraciones pendientes](./configuracion-pendiente.md)
✅ Tests pasando: `npm run test:run`
✅ Build exitoso: `npm run build`
✅ Preview funcionando: `npm run preview`

---

## 🌐 Opciones de Hosting

### 1. Netlify (Recomendado) ⭐

**Por qué elegirlo:**
- ✅ Gratis para proyectos pequeños
- ✅ SSL automático
- ✅ Deploy con Git push
- ✅ CDN global
- ✅ Preview de PRs

#### Pasos para deployar

**A. Desde Git (recomendado)**

1. Sube tu código a GitHub/GitLab/Bitbucket
2. Ve a [netlify.com](https://netlify.com)
3. "Add new site" → "Import from Git"
4. Conecta tu repositorio
5. Configuración:
   ```
   Build command: npm run build
   Publish directory: dist
   ```
6. Deploy!

**B. Manual (arrastra y suelta)**

1. Corre `npm run build`
2. Ve a [netlify.com/drop](https://netlify.com/drop)
3. Arrastra la carpeta `dist/`
4. Listo!

#### Dominio personalizado
1. Netlify Dashboard → Domain settings
2. Add custom domain
3. Sigue las instrucciones DNS

---

### 2. Vercel

**Similar a Netlify, también muy bueno.**

#### Pasos
1. Ve a [vercel.com](https://vercel.com)
2. Import project desde Git
3. Configuración:
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   ```
4. Deploy!

---

### 3. GitHub Pages

**Gratis, perfecto para proyectos estáticos.**

#### Pasos

1. **Configurar vite.config.js**
   ```javascript
   export default defineConfig({
     base: '/nombre-repo/',  // Nombre de tu repositorio
     // ... resto de config
   })
   ```

2. **Crear script de deploy**

   Crea `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy
   on:
     push:
       branches: [main]

   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: 18
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

3. **Configurar GitHub**
   - Settings → Pages
   - Source: gh-pages branch
   - Save

4. **Push a main**
   ```bash
   git push origin main
   ```

Tu sitio estará en: `https://tu-usuario.github.io/nombre-repo/`

---

### 4. Hosting tradicional (cPanel, FTP)

Si tienes hosting tradicional:

1. **Build local**
   ```bash
   npm run build
   ```

2. **Subir carpeta `dist/`**
   - Via FTP (FileZilla, Cyberduck)
   - Via cPanel File Manager
   - Sube TODO el contenido de `dist/` a `public_html/`

3. **Verificar**
   - Visita tu dominio
   - Verifica que todo funcione

#### .htaccess para URLs limpias (opcional)
Crea `.htaccess` en la raíz:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 🔐 Configuración de Dominio

### DNS Settings

Una vez tengas hosting, configura tu dominio:

**Para Netlify/Vercel:**
```
Type    Name    Value
A       @       IP_del_servicio
CNAME   www     tu-sitio.netlify.app
```

**Para hosting tradicional:**
```
Type    Name    Value
A       @       IP_de_tu_servidor
CNAME   www     tu-dominio.com
```

**Tiempo de propagación:** 24-48 horas

---

## 🔒 SSL (HTTPS)

### Netlify/Vercel
✅ Automático y gratis (Let's Encrypt)

### cPanel
1. Panel de control → SSL/TLS
2. AutoSSL (gratis) o certificado propio
3. Force HTTPS redirect

### Manual (Let's Encrypt)
```bash
# En el servidor
sudo certbot --nginx -d tudominio.com -d www.tudominio.com
```

---

## 📊 Post-Deploy Checklist

Después de deployar, verifica:

```
🌐 Acceso
  [ ] Sitio carga en tu dominio
  [ ] www.tudominio.com funciona
  [ ] https:// funciona

📄 Páginas
  [ ] Todas las páginas cargan
  [ ] Navegación funciona
  [ ] Header/Footer aparecen

🎨 Assets
  [ ] CSS se aplica correctamente
  [ ] Imágenes cargan
  [ ] Favicon visible

📧 Funcionalidad
  [ ] Formulario envía emails
  [ ] Links externos funcionan
  [ ] Analytics trackea

📱 Responsive
  [ ] Funciona en móvil
  [ ] Funciona en tablet
  [ ] Funciona en desktop

🔍 SEO
  [ ] robots.txt accesible
  [ ] sitemap.xml accesible
  [ ] Meta tags correctos

🔒 Seguridad
  [ ] HTTPS activo
  [ ] Sin errores en consola
  [ ] Sin warnings de seguridad
```

---

## 🛠️ Herramientas de Verificación

### PageSpeed Insights
[pagespeed.web.dev](https://pagespeed.web.dev/)
- Prueba velocidad
- Métricas Core Web Vitals
- Sugerencias de optimización

### Lighthouse (Chrome DevTools)
1. Abre DevTools (F12)
2. Pestaña "Lighthouse"
3. Generate report
4. Revisa puntuación (idealmente 90+)

### Facebook Sharing Debugger
[developers.facebook.com/tools/debug/](https://developers.facebook.com/tools/debug/)
- Verifica Open Graph tags
- Preview de cómo se ve al compartir

### Google Search Console
[search.google.com/search-console](https://search.google.com/search-console)
1. Agrega tu propiedad
2. Verifica ownership
3. Envía sitemap.xml
4. Monitorea indexación

---

## 🔄 Actualizaciones Futuras

### Con Git (Netlify/Vercel)
```bash
# Hacer cambios
git add .
git commit -m "Actualización X"
git push origin main

# Deploy automático!
```

### Manual (FTP/cPanel)
```bash
# 1. Build local
npm run build

# 2. Subir solo archivos cambiados de dist/
# Via FTP o cPanel
```

---

## 🚨 Troubleshooting

### "Page not found" en URLs
**Problema:** Hosting no tiene configuración para SPA

**Solución:**
- Netlify: Crear `public/_redirects`:
  ```
  /*    /index.html   200
  ```
- Vercel: Crear `vercel.json`:
  ```json
  {
    "rewrites": [{ "source": "/(.*)", "destination": "/" }]
  }
  ```

### Assets no cargan (404)
**Problema:** Rutas incorrectas

**Solución:**
- Verifica `base` en `vite.config.js`
- Verifica que paths sean absolutos `/...`

### Formulario no envía
**Problema:** Formspree no configurado o CORS

**Solución:**
- Verifica ID en `form-handler.js`
- Verifica modo simulado = false
- Revisa consola por errores

### Analytics no trackea
**Problema:** ID incorrecto o bloqueado por adblocker

**Solución:**
- Verifica ID de Google Analytics
- Prueba en modo incognito
- Espera 24h para ver datos

---

## 💡 Tips Pro

### 1. Subdominios para staging
```
produccion: www.tudominio.com
staging: staging.tudominio.com
```

### 2. Ambiente de preview (Netlify)
- Cada PR crea preview único
- Testing antes de merge

### 3. Rollback rápido
- Netlify/Vercel guardan deploys anteriores
- Un click para volver atrás

### 4. Variables de entorno
```javascript
// En producción
const ANALYTICS_ID = import.meta.env.VITE_ANALYTICS_ID

// En Netlify: Environment variables
// VITE_ANALYTICS_ID = G-ABC123
```

---

[← Volver al README principal](../README.md)
