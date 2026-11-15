import { Section } from '@/components/layout/Section'
import { Reveal } from '@/components/motion/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'

// Restrained abstract marks — decoration only, no meaning claimed.
function MarkCircles() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="size-8 text-fg-muted">
      <circle cx="16" cy="16" r="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="1.5" fill="currentColor" />
    </svg>
  )
}

function MarkSquares() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="size-8 text-fg-muted">
      <rect x="6" y="10" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="12" y="6" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function MarkBars() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="size-8 text-fg-muted">
      <line x1="6" y1="10" x2="26" y2="10" stroke="currentColor" strokeWidth="1.5" />
      <line x1="6" y1="16" x2="20" y2="16" stroke="currentColor" strokeWidth="1.5" />
      <line x1="6" y1="22" x2="24" y2="22" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="16" r="2.5" fill="currentColor" />
    </svg>
  )
}

const PRINCIPLES = [
  {
    number: '01',
    title: 'Research Before Assumptions',
    description:
      'Understand the problem, explore existing approaches, and identify what needs to be tested.',
    Mark: MarkCircles,
  },
  {
    number: '02',
    title: 'Build to Learn',
    description:
      'Turn concepts into working experiments, prototypes, and software implementations.',
    Mark: MarkSquares,
  },
  {
    number: '03',
    title: 'Measure What Matters',
    description:
      'Evaluate outcomes, understand limitations, and improve based on evidence.',
    Mark: MarkBars,
  },
]

/**
 * Engineering Philosophy (blueprint §02): how problems are approached,
 * without implying seniority. Three principles in cards — index number,
 * title, short description, restrained abstract mark — 3 columns on
 * desktop, 2 on tablet, 1 on mobile.
 */
export function Philosophy() {
  return (
    <Section id="philosophy" tone="surface" labelledBy="philosophy-heading">
      <Reveal>
        <SectionHeader
          id="philosophy-heading"
          label="How I Approach Problems"
          title="Good engineering begins with better questions."
        />
      </Reveal>
      <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PRINCIPLES.map((principle, index) => (
          <li key={principle.number} className="md:[&:nth-child(3)]:col-span-2 lg:[&:nth-child(3)]:col-span-1">
            <Reveal delay={index * 0.08} className="h-full">
              <article className="flex h-full flex-col rounded-card border border-line bg-raised p-6 md:p-7">
                <div className="flex items-start justify-between gap-3">
                  <p className="font-mono text-meta text-fg-muted">{principle.number}</p>
                  <principle.Mark />
                </div>
                <h3 className="mt-6 text-project">{principle.title}</h3>
                <p className="mt-3 text-fg-secondary">{principle.description}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
