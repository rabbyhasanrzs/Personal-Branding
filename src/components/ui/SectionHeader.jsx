import { cn } from '@/lib/cn'
import { Eyebrow } from './Eyebrow'

/**
 * Section label + heading + optional intro. Pass `id` and give the parent
 * <Section> `labelledBy={id}` to expose a named landmark.
 */
export function SectionHeader({ label, title, intro, id, as: Heading = 'h2', className }) {
  return (
    <header className={cn('max-w-3xl', className)}>
      {label && <Eyebrow className="mb-4">{label}</Eyebrow>}
      <Heading id={id} className="text-section">
        {title}
      </Heading>
      {intro && <p className="mt-5 max-w-[65ch] text-fg-secondary">{intro}</p>}
    </header>
  )
}
