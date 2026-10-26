# Automatización de Pipeline CI en Jenkins

Este repositorio contiene la solución completa para la tarea individual de la materia **Procesos de Software** (10% P1): *Automatización de tareas en pipeline CI - Jenkins*.

---

## 📋 Arquitectura del Pipeline (3 Etapas)

El flujo de Integración Continua está implementado mediante un archivo `Jenkinsfile` declarativo estructurado en las 3 etapas solicitadas:

1. **Integración al repo privado:**
   - Clonación e integración segura con el repositorio privado de GitHub utilizando credenciales gestionadas en Jenkins.
   - Verificación del estado del repositorio y trazabilidad del último commit.

2. **Compilación y test automatizados:**
   - Verificación sintáctica y emulación de build (`npm run build`).
   - Ejecución de pruebas unitarias automatizadas con el ejecutor nativo `node:test` (`npm test`).

3. **Notificación de ejecución (Éxito o Fallo):**
   - Notificación instantánea mediante un **Webhook entrante de Discord**.
   - Mensaje enriquecido (Embed) con color verde (🟢) para ejecuciones exitosas o rojo (🔴) para fallos, indicando autor, commit, rama y enlace al build.

---

## 📁 Estructura del Proyecto

```text
├── .gitignore              # Archivos excluidos del control de versiones
├── Jenkinsfile             # Definición declarativa del pipeline de Jenkins
├── package.json            # Metadatos del proyecto y scripts de ejecución
├── README.md               # Documentación general
├── src/
│   ├── math.js             # Lógica de operaciones matemáticas
│   └── stringUtils.js      # Lógica de utilidades de texto
├── tests/
│   ├── math.test.js        # Pruebas unitarias para math.js
│   └── stringUtils.test.js # Pruebas unitarias para stringUtils.js
└── scripts/
    └── notify-discord.js   # Script de despacho de alertas a Discord vía Webhook
```

---

## 🚀 Pruebas en Local

Para verificar el correcto funcionamiento antes de subir cambios a GitHub:

```bash
# Ejecutar verificación de build
npm run build

# Ejecutar las 13 pruebas unitarias
npm test
```
