# martingiura.com

Sitio personal de Martín Giura — fundador, advisor y Fractional CRO.
Landing de una página, bilingüe (ES/EN), estética editorial/premium.

## Stack

- **Next.js 15** (App Router) + **React 19**
- **Tailwind CSS v4**
- Tipografías: **Fraunces** (display) + **Inter** (texto), vía Google Fonts
- Formulario de contacto: **Web3Forms** (sin backend)

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
npm start        # servir el build
```

> Nota: el script `dev` setea `NODE_OPTIONS='--no-experimental-webstorage'` porque Node 25
> expone un `localStorage` global que rompe el dev server de Next. `build`/`start` quedan
> limpios para el deploy.

## Dónde está cada cosa

| Qué quiero cambiar | Archivo |
| --- | --- |
| **Todos los textos** (ES y EN) | `lib/content.ts` |
| Colores y tipografías | `app/globals.css` (bloque `@theme`) |
| Metadata / SEO | `app/layout.tsx` |
| Orden de las secciones | `app/page.tsx` |
| Foto de perfil | `public/images/martin-giura.jpg` (ver README ahí) |
| Logos reales | `public/logos/` (ver README ahí) |
| Formulario | `components/ContactForm.tsx` + variable `NEXT_PUBLIC_WEB3FORMS_KEY` |

## Secciones

Hero · Proof bar · Stats · Trayectoria · Timeline · Servicios (Prospecta) ·
Advisory · Reconocimientos · Contacto.

## Deploy

Ver [DEPLOY.md](DEPLOY.md).
