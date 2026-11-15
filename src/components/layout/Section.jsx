import { cn } from '@/lib/cn'
import { Container } from './Container'

const TONES = {
  base: '',
  // Banding with a tonal surface + hairlines separates sections without
  // wrapping everything in cards.
  surface: 'bg-surface border-y border-line',
}

/**
 * A homepage section: anchor id, vertical rhythm, optional tonal band.
 * Pass `labelledBy` with the id of the section heading for a named landmark.
 */
export function Section({ id, tone = 'base', labelledBy, className, containerClassName, children }) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn('py-section', TONES[tone], className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}
