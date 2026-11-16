import { Brain, Code, FlaskConical, Terminal, Wrench } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Reveal } from '@/components/motion/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TechTag } from '@/components/ui/TechTag'

// Domains from PORTFOLIO_CONTENT.md §6. Prose domains keep their approved
// sentence; tool lists are shown as grouped tags — the presentation the
// blueprint prefers. No percentages, no proficiency bars, no expert claims.
const DOMAINS = [
  {
    id: 'ml-ai',
    number: 'DOMAIN / 01',
    icon: Brain,
    title: 'Machine Learning & AI',
    description:
      'Machine Learning fundamentals, Deep Learning concepts, Generative AI, data-driven problem solving, and model experimentation.',
    span: 'lg:col-span-2',
  },
  {
    id: 'data-science',
    number: 'DOMAIN / 02',
    icon: FlaskConical,
    title: 'Data Science & Analysis',
    tags: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
    span: 'lg:col-span-2',
  },
  {
    id: 'software-engineering',
    number: 'DOMAIN / 03',
    icon: Code,
    title: 'Software Engineering',
    description:
      'Programming fundamentals, Object-Oriented Programming, Android application development, Java, XML, application architecture fundamentals, debugging, and problem-solving.',
    span: 'lg:col-span-2',
  },
  {
    id: 'programming',
    number: 'DOMAIN / 04',
    icon: Terminal,
    title: 'Programming',
    tags: ['Python', 'C++', 'Java'],
    span: 'lg:col-span-3',
  },
  {
    id: 'tools',
    number: 'DOMAIN / 05',
    icon: Wrench,
    title: 'Tools',
    tags: ['Git', 'GitHub', 'Jupyter Notebook', 'Android Studio', 'VS Code'],
    span: 'md:[&:nth-child(5)]:col-span-2 lg:col-span-3',
  },
]

/**
 * Technical Expertise (blueprint §05, "Technical Journey"): the
 * development of technical foundations, organised by domain. A grouped
 * technology list — never arbitrary proficiency ratings.
 */
export function Expertise() {
  return (
    <Section id="expertise" tone="surface" labelledBy="expertise-heading">
      <Reveal>
        <SectionHeader
          id="expertise-heading"
          label="Learning & Development"
          title="Building foundations through continuous practice."
        />
      </Reveal>
      <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
        {DOMAINS.map((domain, index) => (
          <li key={domain.id} className={domain.span}>
            <Reveal delay={index * 0.06} className="h-full">
              <article className="flex h-full flex-col rounded-card border border-line bg-raised p-6 md:p-7">
                <div className="flex items-center justify-between gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-line bg-surface text-fg-secondary">
                    <domain.icon aria-hidden="true" size={18} />
                  </span>
                  <p className="font-mono text-meta text-fg-muted">{domain.number}</p>
                </div>
                <h3 className="mt-5 text-project">{domain.title}</h3>
                {domain.description && (
                  <p className="mt-3 text-fg-secondary">{domain.description}</p>
                )}
                {domain.tags && (
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {domain.tags.map((tag) => (
                      <li key={tag}>
                        <TechTag>{tag}</TechTag>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
      <Reveal delay={0.1}>
        <p className="mt-8 text-meta text-fg-muted">
          Grouped by domain, without proficiency ratings — these are learning and working
          areas, not expert claims. Only technologies I can discuss and demonstrate.
        </p>
      </Reveal>
    </Section>
  )
}
