# The Lab Notebook — Md. Rabby Hasan

Personal portfolio of Md. Rabby Hasan, an aspiring AI/ML Engineer. "The Lab Notebook" — a living record of research, engineering, and continuous learning.

React 19 · Vite 8 · JavaScript · Tailwind CSS 4 · Framer Motion · Lucide React.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # serve the production build → http://localhost:4173
npm run lint     # oxlint
```

Requires Node 20.19+ (tested on Node 22).

## Homepage sections

In order: Navigation, Hero, Philosophy, About, Technical Expertise, Featured Work, Research, Education, Contact, Footer.

- **Featured Work** — two projects: Diabetic Retinopathy Classification & Explainability (in progress) and the RabbY Food Delivery Android app (completed).
- **Research** — the ongoing DR project plus six research interests, each honestly labelled.
- **Writing** and **Recently Shipped** stay hidden until real content exists; the nav lists only sections that exist.

## Structure

```
src/
  main.jsx                 ThemeProvider + MotionConfig (reduced-motion) + <App />
  App.jsx                  Composes SiteLayout; homepage sections in order
  index.css                Design tokens, type scale, layout vars, base styles
  components/
    layout/                Container, Section, SiteLayout, SkipLink, Navbar, Footer
    ui/                    Button, Eyebrow, SectionHeader, StatusLabel, TechTag,
                           ThemeToggle, SocialIcons
    motion/                Reveal (fade + translate, once)
  sections/                Hero, Philosophy, About, Expertise, FeaturedWork,
                           Research, Education, Contact
  theme/                   ThemeProvider, useTheme, constants
  data/                    site.js (name, nav, verified links),
                           projects.js (featured projects),
                           statuses.js (status vocabulary)
  lib/                     cn() class joiner
```

Import with the `@` alias: `import { Button } from '@/components/ui'`.

## Theming

- Colours are CSS variables in `index.css`, switched by `data-theme="dark|light"` on `<html>`.
- `@theme inline` exposes them as utilities: `bg-background`, `bg-surface`, `bg-raised`,
  `bg-hover`, `border-line`, `text-fg`, `text-fg-secondary`, `text-fg-muted`, `bg-accent`,
  `text-accent-text`, `text-accent-violet`. Never use hex values in components.
- Dark is the default. `index.html` applies the saved theme before first paint (no flash).
- Type utilities: `text-hero`, `text-page`, `text-section`, `text-project`, `text-body`, `text-meta`.
- Layout utilities: `container-page`, `container-wide`, `py-section`, `bg-hero-glow`.
- Radius utilities: `rounded-panel` (16), `rounded-card` (20), `rounded-showcase` (24).
- Breakpoints: `sm` 640 · `md` 768 (tablet) · `lg` 1024 · `xl` 1200 (desktop).

## Content rules

Copy and claims follow PERSONAL_BRAND.md and PORTFOLIO_CONTENT.md: no invented metrics,
honest project status, no placeholder links. Contact links (GitHub, LinkedIn, X, Facebook,
email) are all verified.

## Deploy (Vercel)

No `vercel.json` is needed — Vercel auto-detects the Vite framework. Import the
repository in the Vercel dashboard and confirm these settings:

- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`
- Node version: 20.19+ (the `engines` field in `package.json` already requires it)

No environment variables are needed — the site has no secrets, no API keys, and no
backend. The production branch is `main`; every pull request gets a preview
deployment automatically.

After the first deploy, add the live domain to `index.html` as `og:url` and a
`rel="canonical"` link — both are intentionally absent until the domain is known.

## Status

Work is developed on feature branches and reviewed through pull requests; `main` is not changed directly. The site is not deployed yet.
