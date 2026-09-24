# EcoGuard Uganda — frontend

Community environmental intelligence. Vite + React SPA that talks to the
EcoGuard API. In development it proxies `/api/v1` to the local backend; on
Vercel it is baked to `VITE_API_BASE_URL` at build time and shares a session
cookie with the API domain.

## Run locally

```bash
npm install
API_PROXY_TARGET=http://localhost:8000 npm run dev
```

## Build

```bash
npm run build
```

## Deploy (Vercel)

Project `ecoguard` → `https://ecoguard.vercel.app`.
Set `VITE_API_BASE_URL=https://ecoguard-api.vercel.app/api/v1` in the Vercel
project for production. The workspace signs in against the live API and
subscribes to `/api/v1/stream` (SSE) for realtime updates.