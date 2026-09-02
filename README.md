# Mafick Integrated website

A plain React + TypeScript + Tailwind CSS + Vite website. There is no Wrangler, Cloudflare runtime or sign-in dependency.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints, normally `http://localhost:5173`.

## Important editing locations

- Listings: `src/data/listings.ts`
- Blog guides: `src/data/posts.ts`
- WhatsApp number: `src/lib/constants.ts` (one source of truth for every button and form)
- Registered-company wording: `src/lib/constants.ts`
- Company profile, vision, mission and professional network: `src/pages/AboutPage.tsx`
- Nigerian property imagery: `public/images/`
- Main styles and palette: `src/index.css`

The included listings and testimonials are demonstration content and must be replaced or approved before launch. Company services, vision, mission and communication principles are based on the supplied Mafick Integrated business profile.

## Routes

- `/` home
- `/services`
- `/listings`
- `/listings/:slug`
- `/about`
- `/contact`
- `/blog`
- `/blog/:slug`

## Build and deploy

```bash
npm run build
npm run preview
```

`vercel.json` provides the SPA rewrite needed for direct links on Vercel.
