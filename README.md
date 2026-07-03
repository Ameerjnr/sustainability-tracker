# Sustainability Tracker — Marketing Site

Frontend foundation for the Sustainability Tracker marketing website: embodied
carbon estimation and sustainability reporting for architects, civil
engineers, quantity surveyors, sustainability consultants and construction
companies.

This repository is **frontend only** — no authentication, no database, no
API routes. The contact form is UI only and does not send data anywhere.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript (strict mode)
- Tailwind CSS v4 (CSS-first config via `@theme` in `app/globals.css`)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

### Other scripts

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # eslint
```

## Folder structure

```
app/                   Routes, layout, metadata, loading & 404 UI
components/layout/      Navbar, Footer, MobileDrawer
components/sections/    Hero, Features, About, Contact, ContactForm
components/ui/          Reusable primitives (Button, Input, Card, Icon, ...)
lib/                     Site copy/config (constants.ts) and cn() helper (utils.ts)
```

## Design system

- Palette: near-white surfaces (`--color-white`, `--color-surface`), a
  near-black "carbon" ink for text, and a deep forest green accent
  (`--color-forest-600`) used sparingly for CTAs and status. No gradients,
  no glassmorphism.
- Type: Inter Tight for headings, Inter for body copy, JetBrains Mono for
  data (stat figures, units, labels) — a deliberate nod to the
  measurement/spec-sheet nature of the product.
- Signature element: the `StatPanel` component in the hero renders a mock
  carbon-assessment printout instead of a generic illustration.

All design tokens live in `app/globals.css` under `@theme`, per Tailwind v4
conventions. There is no `tailwind.config.js`.

## What's intentionally not included

- Authentication / accounts
- API routes or a backend of any kind
- Real form submission (the contact form only manages local UI state)
- Real content-managed blog/dashboard — this is the public marketing site only

## Testing checklist

- [ ] `npm run build` completes with no type or lint errors
- [ ] Navbar stays sticky on scroll and does not overlap content
- [ ] Mobile drawer opens/closes via button, backdrop click, and `Esc`
- [ ] Mobile drawer traps body scroll while open
- [ ] All nav links scroll to the correct in-page section
- [ ] Hero renders correctly at 375px, 768px, 1024px, 1440px
- [ ] Feature grid reflows 1 → 2 → 3 columns across breakpoints
- [ ] Contact form: all required fields block submission until filled
- [ ] Contact form: submitting shows the confirmation state, resettable
- [ ] `/does-not-exist` renders the custom 404 page
- [ ] Keyboard-only pass: every interactive element is reachable and has a
      visible focus ring, in a logical tab order
- [ ] Screen reader pass: headings are hierarchical (one `h1` per page),
      nav landmarks and skip link work
- [ ] `prefers-reduced-motion: reduce` disables animation
- [ ] Lighthouse: Performance, Accessibility, Best Practices, SEO all pass
- [ ] `<title>`, meta description, OpenGraph and Twitter tags render
      correctly (validate with a social card debugger)
- [ ] No console errors/warnings in dev or production build

## Notes for backend integration (out of scope here)

- Wire `ContactForm`'s `handleSubmit` to a real endpoint or Server Action
- Add authentication before exposing any calculator/dashboard routes
- Replace `/privacy` and `/terms` placeholder copy with reviewed legal text
- Replace `siteConfig.url` and `og-image.png` with production values
