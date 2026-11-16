// Site-wide constants. Copy comes from PORTFOLIO_CONTENT.md.
// Contact links appear only once verified — never ship placeholder links.
// GitHub was verified 2026-11-16 (profile rabbyhasanrzs); LinkedIn, X and
// Facebook were supplied by the user the same day; email was supplied by
// the user 2026-11-16.

export const site = {
  name: 'Md. Rabby Hasan',
  wordmark: 'MD. RABBY HASAN',
  tagline: 'Research. Engineer. Experiment. Build.',
  contactCta: "Let's Connect",
  links: {
    github: 'https://github.com/rabbyhasanrzs',
    linkedin: 'https://www.linkedin.com/in/md-rabby-hasan-524093294/',
    x: 'https://x.com/MDRABBY38658653',
    facebook: 'https://www.facebook.com/rabby.hasanrzs',
    email: 'rabbyhasanrzs518@gmail.com',
  },
}

// Order matches the global navigation spec. `id` is the section anchor.
// Writing stays out until the Writing section exists — a nav link with no
// section to land on is a dead link. It returns here when real writing lands.
export const navItems = [
  { id: 'work', label: 'Work' },
  { id: 'research', label: 'Research' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]
