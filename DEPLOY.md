# Deploy a Vercel

El sitio es un proyecto Next.js estándar, 100% compatible con Vercel (su deploy es gratis
para proyectos personales).

## Opción A — Desde la web de Vercel (recomendada, sin terminal)

1. Subí el proyecto a GitHub:
   - Creá un repo nuevo (privado o público) en https://github.com/new
   - En esta carpeta corré:
     ```bash
     git remote add origin https://github.com/TU-USUARIO/martingiura-web.git
     git push -u origin main
     ```
2. Entrá a https://vercel.com → **Add New… → Project** → importá el repo.
3. Vercel detecta Next.js automáticamente. No cambies nada en build settings.
4. En **Environment Variables** agregá:
   - `NEXT_PUBLIC_WEB3FORMS_KEY` = tu access key de Web3Forms (ver más abajo).
5. **Deploy**. En ~1 minuto queda online en `https://martingiura-web.vercel.app`.

## Opción B — Vercel CLI

```bash
npm i -g vercel
vercel            # primera vez: login + configurar proyecto
vercel --prod     # deploy a producción
```
Acordate de cargar la variable de entorno con `vercel env add NEXT_PUBLIC_WEB3FORMS_KEY`.

## Dominio propio

En el dashboard de Vercel → tu proyecto → **Settings → Domains** → agregá
`martingiura.com` (o el que tengas) y seguí las instrucciones de DNS.

## Formulario de contacto (Web3Forms)

El formulario envía los mensajes directo a tu casilla, sin backend:

1. Entrá a https://web3forms.com y poné el email donde querés recibir los mensajes.
2. Te llega un **Access Key**.
3. Local: creá `.env.local` con `NEXT_PUBLIC_WEB3FORMS_KEY=tu-access-key` y reiniciá `npm run dev`.
4. En Vercel: agregá esa misma variable en Environment Variables (paso 4 de arriba).

Mientras no esté la key, el formulario valida los campos pero muestra un mensaje de error
al enviar (no rompe nada).
