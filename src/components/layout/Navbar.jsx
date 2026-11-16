import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/cn'
import { navItems, site } from '@/data/site'
import { Button } from '@/components/ui/Button'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Container } from './Container'

/** True once the page has scrolled past a small threshold. */
function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}

/**
 * Page scroll progress, 0–1, updated on animation frames so the progress
 * indicator stays cheap. Returns 0 on pages too short to scroll.
 */
function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf = 0
    const update = () => {
      const el = document.documentElement
      const max = el.scrollHeight - el.clientHeight
      setProgress(max > 0 ? Math.min(1, Math.max(0, el.scrollTop / max)) : 0)
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return progress
}

/**
 * Tracks which homepage section is currently in view. Sections that do not
 * exist yet are skipped, so this degrades gracefully until the sections land
 * — no active state, no errors.
 */
function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    const targets = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (targets.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length > 0) setActiveId(visible[0].target.id)
      },
      // Only the section crossing the middle band of the viewport counts.
      { rootMargin: '-40% 0px -55% 0px' },
    )
    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [ids])

  return activeId
}

/**
 * Slim sticky navigation (blueprint §4): 72px bar, translucent background
 * that turns more opaque after scrolling, wordmark left, section links +
 * theme toggle + contact CTA right, and a compact mobile menu.
 *
 * Accessibility: semantic <header>/<nav> landmarks, skip link lives in
 * SiteLayout, visible focus states come from index.css, the mobile menu
 * exposes aria-expanded, closes on Escape, and returns focus to its trigger.
 */
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolled()
  const progress = useScrollProgress()
  const sectionIds = useMemo(() => navItems.map((item) => item.id), [])
  const activeId = useActiveSection(sectionIds)
  const triggerRef = useRef(null)
  const panelRef = useRef(null)

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  // Escape closes the mobile menu and returns focus to the trigger.
  useEffect(() => {
    if (!menuOpen) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeMenu()
        triggerRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen, closeMenu])

  // Close the mobile menu once the desktop navigation appears.
  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)')
    const onChange = (event) => {
      if (event.matches) setMenuOpen(false)
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  // Move focus into the panel when it opens.
  useEffect(() => {
    if (menuOpen) panelRef.current?.querySelector('a')?.focus()
  }, [menuOpen])

  return (
    <header
      id="top"
      className={cn(
        'sticky top-0 z-50 border-b border-line backdrop-blur-md transition-colors duration-200',
        scrolled ? 'bg-surface/95' : 'bg-background/80',
      )}
    >
      {/* Scroll progress — thin blue line at the very top of the bar. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-0.5 bg-accent"
        style={{ width: `${progress * 100}%` }}
      />

      <Container className="flex h-[var(--nav-h)] items-center justify-between gap-4">
        <a
          href="#top"
          aria-label="Md. Rabby Hasan — back to top"
          className="shrink-0 text-[0.9375rem] font-medium tracking-[0.04em] text-fg"
        >
          {site.wordmark}
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const active = activeId === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={active ? 'location' : undefined}
                    className={cn(
                      'relative rounded-md px-3 py-2 text-sm transition-colors duration-200',
                      active ? 'text-fg' : 'text-fg-secondary hover:bg-hover hover:text-fg',
                    )}
                  >
                    {item.label}
                    {active && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent"
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden md:block">
            <Button href="#contact" variant="primary" size="md">
              {site.contactCta}
            </Button>
          </div>
          <button
            type="button"
            ref={triggerRef}
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex size-11 items-center justify-center rounded-full border border-line text-fg-secondary transition-colors duration-200 hover:bg-hover hover:text-fg md:hidden"
          >
            {menuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
          </button>
        </div>
      </Container>

      {menuOpen && (
        <div id="mobile-menu" ref={panelRef} className="border-t border-line bg-surface md:hidden">
          <Container>
            <nav aria-label="Mobile">
              <ul className="py-2">
                {navItems.map((item) => {
                  const active = activeId === item.id
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={closeMenu}
                        aria-current={active ? 'location' : undefined}
                        className={cn(
                          'flex min-h-12 items-center gap-2.5 rounded-lg px-3 text-base transition-colors duration-200',
                          active ? 'bg-hover font-medium text-fg' : 'text-fg-secondary hover:bg-hover hover:text-fg',
                        )}
                      >
                        {active && (
                          <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-accent" />
                        )}
                        {item.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
              <div className="border-t border-line py-4">
                <Button href="#contact" variant="primary" size="lg" className="w-full" onClick={closeMenu}>
                  {site.contactCta}
                </Button>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  )
}
