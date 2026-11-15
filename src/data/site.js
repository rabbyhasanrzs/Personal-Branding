// Site-wide constants. Copy comes from PORTFOLIO_CONTENT.md.
// Contact links appear only once verified — never ship placeholder links.
// GitHub was verified 2026-11-16 (profile rabbyhasanrzs); email and
// LinkedIn stay absent until verified values are supplied.

export const site = {
  name: 'Md. Rabby Hasan',
  wordmark: 'MD. RABBY HASAN',
  tagline: 'Research. Engineer. Experiment. Build.',
  contactCta: "Let's Connect",
  links: {
    github: 'https://github.com/rabbyhasanrzs',
  },
}

// Order matches the global navigation spec. `id` is the section anchor.
export const navItems = [
  { id: 'work', label: 'Work' },
  { id: 'research', label: 'Research' },
  { id: 'writing', label: 'Writing' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]
