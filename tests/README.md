# Tests - IS, Art Sport

Suite de tests automatizados para validación y lógica de negocio.

## 🧪 Qué se prueba

### ✅ Validación de formulario (11 tests)

**Email:**
- Valida formato correcto (usuario@dominio.com)
- Rechaza emails inválidos (sin @, sin dominio, con espacios)

**Instagram:**
- Agrega @ automáticamente si falta
- Valida solo caracteres permitidos (letras, números, punto, guión bajo)
- Rechaza caracteres especiales

**Longitud de campos:**
- Nombre: mínimo 2 caracteres
- Mensaje: mínimo 10 caracteres

**Validación completa:**
- Verifica formulario completo con todos los campos
- Detecta errores múltiples
- Normaliza Instagram antes de validar

---

## 🚀 Cómo correr los tests

### Modo watch (recomendado para desarrollo)
```bash
npm test
```
- Se ejecutan automáticamente al guardar cambios
- Perfecto para desarrollo TDD

### Modo run (una sola vez)
```bash
npm run test:run
```
- Ejecuta todos los tests y termina
- Ideal para CI/CD

### Modo UI (interfaz gráfica)
```bash
npm run test:ui
```
- Abre interfaz web en el navegador
- Visualización interactiva de resultados
- Perfecto para debugging

---

## 📊 Cobertura actual

| Categoría | Tests | Estado |
|-----------|-------|--------|
| Validación Email | 2 | ✅ |
| Validación Instagram | 4 | ✅ |
| Validación Longitud | 2 | ✅ |
| Validación Completa | 3 | ✅ |
| **TOTAL** | **11** | **✅** |

---

## 🔧 Tecnologías

- **Vitest** - Test runner moderno y rápido
- **Happy-DOM** - Simula el DOM del navegador
- Compatible con Node.js 18+

---

## 📝 Estructura de archivos

```
tests/
├── README.md                    # Este archivo
├── setup.js                     # Configuración global
└── form-validation.test.js      # Tests de validación
```

---

## ✏️ Agregar nuevos tests

### Ejemplo de test básico:
```javascript
import { describe, it, expect } from 'vitest';

describe('Mi funcionalidad', () => {
  it('debería hacer algo específico', () => {
    const resultado = miFuncion();
    expect(resultado).toBe(esperado);
  });
});
```

### Mejores prácticas:
- ✅ Nombres descriptivos (qué se prueba)
- ✅ Un concepto por test
- ✅ AAA: Arrange (preparar), Act (actuar), Assert (verificar)
- ✅ Tests independientes (no dependen entre sí)

---

## 🐛 Troubleshooting

### "SyntaxError: The requested module..."
- Tu versión de Node es incompatible
- Necesitas Node 18+ para estos tests

### "TypeError: Cannot read property..."
- Verifica que `setup.js` esté configurado
- Revisa que existan las funciones que estás probando

### Tests pasan localmente pero fallan en CI
- Verifica versiones de Node en ambos ambientes
- Asegúrate que `package.json` tenga las dependencias correctas

---

## 🎯 Qué NO se prueba (y por qué)

### Web Components
- Los componentes son simples (solo renderizado)
- Más eficiente probarlos manualmente en el navegador
- Requieren configuración compleja de Custom Elements API

### Integración con backend
- Modo simulado en formulario (no hay backend real)
- Se probaría cuando conectes a Formspree

### UI/Visual
- Tests visuales requieren herramientas como Playwright
- Puedes probar visualmente con `npm run dev`

---

## 📈 Próximos pasos (opcional)

Si quieres expandir los tests:
1. Tests para `main.js` (menú móvil, scroll)
2. Tests para `lazy-images.js` (IntersectionObserver)
3. Tests E2E con Playwright (flujo completo de usuario)
4. Visual regression testing

---

## 🎓 Recursos

- [Vitest Docs](https://vitest.dev/)
- [Testing Best Practices](https://github.com/goldbergyoni/javascript-testing-best-practices)
- [Writing Tests](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
