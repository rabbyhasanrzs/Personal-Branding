# The Lab Notebook — Md. Rabby Hasan

Personal portfolio. React 19 · Vite 8 · JavaScript · Tailwind CSS 4 · Framer Motion · Lucide React.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run lint     # oxlint
```

Requires Node 20.19+ (tested on Node 22).

## Structure

```
src/
  main.jsx                 ThemeProvider + MotionConfig (reduced-motion) + <App />
  App.jsx                  Composes SiteLayout; sections get added here
  index.css                Design tokens, type scale, layout vars, base styles
  components/
    layout/                Container, Section, SiteLayout, SkipLink
    ui/                    Button, Eyebrow, SectionHeader, StatusLabel, TechTag, ThemeToggle
    motion/                Reveal (fade + translate, once)
  sections/                Homepage sections (Hero, Philosophy, …) — next phase
  theme/                   ThemeProvider, useTheme, constants
  data/                    site.js (name, nav), statuses.js (status vocabulary)
  lib/                     cn() class joiner
  dev/FoundationPreview    TEMPORARY verification screen — delete when sections land
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
honest project status, no placeholder links. Contact links are omitted until verified.
