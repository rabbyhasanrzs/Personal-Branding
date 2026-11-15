import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/cn'

const base =
  'group inline-flex items-center justify-center gap-2 font-medium transition-[background-color,border-color,filter,color] duration-200 select-none disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50'

const variants = {
  // Blue is functional: primary actions, links, active states.
  primary: 'rounded-full bg-accent text-accent-fg hover:brightness-110',
  secondary: 'rounded-full border border-line bg-transparent text-fg hover:bg-hover',
  text: 'rounded-md text-accent-text hover:underline underline-offset-4 decoration-1',
}

const sizes = {
  md: 'min-h-11 px-5 text-[0.9375rem]', // 44px minimum touch target
  lg: 'min-h-12 px-6 text-base',
}

/**
 * Renders <a> when `href` is given, otherwise <button>.
 * `arrow` adds a trailing arrow that nudges right on hover/focus.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  href,
  arrow = false,
  className,
  children,
  ...rest
}) {
  const classes = cn(base, variants[variant], variant !== 'text' && sizes[size], className)
  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden="true"
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5"
        />
      )}
    </>
  )

  if (href) {
    const external = /^https?:\/\//.test(href)
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  )
}
