/** First focusable element on the page; lets keyboard users bypass the navigation. */
export function SkipLink({ href = '#main-content' }) {
  return (
    <a
      href={href}
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:text-accent-fg"
    >
      Skip to main content
    </a>
  )
}
