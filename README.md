# nestjs-openia — Backend API con NestJS + OpenAI

Backend REST construido con **NestJS 10** que expone los servicios de **OpenAI** (GPT-4, TTS, Whisper, DALL·E) al frontend Angular. Corre en el puerto **3000**.

---

## Tecnologías

| Paquete | Versión |
|---|---|
| NestJS | ^10 |
| openai SDK | ^4.23 |
| multer | ^2 (subida de archivos) |
| sharp | ^0.34 (procesamiento de imágenes) |
| body-parser | ^2.2 |
| class-validator / class-transformer | ^0.14 / ^0.5 |

---

## Requisitos previos

- Node.js ≥ 18
- Una API Key de OpenAI

---

## Instalación

```bash
npm install
```

---

## Variables de entorno

Crea un archivo `.env` en la raíz de `nestjs-openia/`:

```env
OPENAI_API_KEY=sk-...
```

---

## Ejecutar el servidor

```bash
# Modo desarrollo (watch)
npm run start:dev

# Modo producción
npm run start:prod
```

El servidor quedará disponible en `http://localhost:3000`.

---

## Endpoints de la API

Todos los endpoints están bajo el prefijo `/gpt`.

| Método | Ruta | Descripción |
|---|---|---|
| `POST` | `/gpt/orthography-check` | Corrige la ortografía del texto enviado |
| `POST` | `/gpt/pros-cons-discusser` | Genera pros y contras de un tema (respuesta completa) |
| `POST` | `/gpt/pros-cons-discusser-stream` | Genera pros y contras con streaming (SSE) |
| `POST` | `/gpt/translate` | Traduce un texto a un idioma destino |
| `POST` | `/gpt/text-to-audio` | Convierte texto a audio MP3 (TTS) |
| `GET`  | `/gpt/text-to-audio/:fileId` | Devuelve un archivo de audio generado previamente |
| `POST` | `/gpt/audio-to-text` | Transcribe un archivo de audio a texto (Whisper) |
| `POST` | `/gpt/image-generation` | Genera una imagen con DALL·E |
| `GET`  | `/gpt/image-generation/:filename` | Devuelve una imagen generada |
| `POST` | `/gpt/image-variation` | Genera una variación de una imagen existente |

### Notas sobre subida de archivos (`/gpt/audio-to-text`)

- Campo del formulario: `file`
- Tamaño máximo: **5 MB**
- Formatos permitidos: `.mp3`, `.m4a`, `.wav`, `.ogg`, `.webm`, `.mpeg`
- Los archivos subidos se almacenan temporalmente en `generated/uploads/`

---

## Estructura del proyecto

```
src/
├── main.ts               # Bootstrap (puerto 3000, CORS habilitado)
├── app.module.ts
└── gpt/
    ├── gpt.controller.ts # Rutas REST
    ├── gpt.module.ts
    ├── gpt.service.ts    # Lógica de negocio
    ├── dto/              # DTOs con validación (class-validator)
    └── use-case/         # Casos de uso individuales por funcionalidad

generated/
├── audios/               # Archivos MP3 generados por TTS
├── images/               # Imágenes generadas por DALL·E
└── uploads/              # Archivos de audio subidos temporalmente
```

---

## Scripts disponibles

```bash
npm run start         # Producción básica
npm run start:dev     # Desarrollo con hot-reload
npm run start:debug   # Desarrollo con debugger
npm run build         # Compilar a dist/
npm run lint          # Análisis estático con ESLint
npm run test          # Tests unitarios con Jest
npm run test:cov      # Tests con cobertura
npm run test:e2e      # Tests end-to-end
```

---

```bash
# Tests unitarios
npm run test

# Tests e2e
npm run test:e2e

# Cobertura de tests
npm run test:cov
```
