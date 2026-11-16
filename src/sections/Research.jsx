import { Section } from '@/components/layout/Section'
import { Reveal } from '@/components/motion/Reveal'
import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { StatusLabel } from '@/components/ui/StatusLabel'
import { projects } from '@/data/projects'

// Research interests (PORTFOLIO_CONTENT.md §5). Each is a question being
// explored — labelled Research Interest, never presented as completed work.
const INTERESTS = [
  { id: '01', name: 'Machine Learning' },
  { id: '02', name: 'Deep Learning' },
  { id: '03', name: 'Explainable AI' },
  { id: '04', name: 'Generative AI' },
  { id: '05', name: 'AI Agents and Agentic Systems' },
  { id: '06', name: 'Efficient and interpretable AI systems' },
]

/**
 * Research Archive (blueprint §04): publication-archive style. One ongoing
 * entry — the DR project, read from the same data as Featured Work so the
 * two sections can never disagree — plus the research interests, each
 * honestly labelled Research Interest.
 */
export function Research() {
  const ongoing = projects[0]

  return (
    <Section id="research" tone="surface" labelledBy="research-heading">
      <Reveal>
        <SectionHeader
          id="research-heading"
          label="Research Archive"
          title="Exploring the questions behind intelligent systems."
          intro="Exploring intelligent systems through experimentation, literature, and reproducible engineering."
        />
      </Reveal>

      <Reveal delay={0.05}>
        <article className="mt-12 rounded-showcase border border-line bg-raised p-6 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <Eyebrow>Ongoing / DR-001</Eyebrow>
            <StatusLabel status={ongoing.status} />
          </div>
          <h3 className="mt-5 max-w-2xl text-project">{ongoing.title}</h3>
          <p className="mt-2 font-mono text-meta text-fg-muted">{ongoing.category}</p>
          <p className="mt-5 max-w-[65ch] text-fg-secondary">{ongoing.summary}</p>
          <p className="mt-4 max-w-[65ch] text-sm text-fg-secondary">
            <span className="font-mono text-meta text-fg-muted">METHOD — </span>
            Deep-learning architectures for five-class staging, with Grad-CAM explainability,
            on retinal fundus images.
          </p>
          <div className="mt-7">
            <Button href="#work" variant="text" arrow>
              View Project 001
            </Button>
          </div>
        </article>
      </Reveal>

      <ol className="mt-8 grid gap-4 md:grid-cols-2">
        {INTERESTS.map((interest, index) => (
          <li key={interest.id}>
            <Reveal delay={index * 0.05} className="h-full">
              <article className="flex h-full items-center justify-between gap-4 rounded-card border border-line bg-raised px-5 py-4">
                <div>
                  <p className="font-mono text-meta text-fg-muted">INTEREST / {interest.id}</p>
                  <h3 className="mt-1.5 font-medium text-fg">{interest.name}</h3>
                </div>
                <StatusLabel status="interest" className="shrink-0" />
              </article>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal delay={0.1}>
        <p className="mt-8 text-meta text-fg-muted">
          Ongoing work carries its true status; interests are questions being explored, not
          completed research. A proposal is never presented as a publication.
        </p>
      </Reveal>
    </Section>
  )
}
