import { SkipLink } from './SkipLink'

/**
 * Page shell: skip link → header → <main> → footer.
 * `header` and `footer` slots are filled by the Navbar and Footer once built.
 */
export function SiteLayout({ header = null, footer = null, children }) {
  return (
    <>
      <SkipLink />
      {header}
      <main id="main-content" tabIndex={-1} className="outline-none">
        {children}
      </main>
      {footer}
    </>
  )
}
