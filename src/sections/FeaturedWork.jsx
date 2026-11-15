import {
  ArrowDown,
  ArrowRight,
  CircleCheck,
  CreditCard,
  Eye,
  Image,
  LayoutGrid,
  LogIn,
  Smartphone,
  UtensilsCrossed,
} from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Reveal } from '@/components/motion/Reveal'
import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { StatusLabel } from '@/components/ui/StatusLabel'
import { TechTag } from '@/components/ui/TechTag'
import { projects } from '@/data/projects'

/**
 * Project 001 visual — a model-architecture diagram drawn in code.
 * The approach, not results: no metrics, no outputs are shown.
 */
function DrArchitecture() {
  const layers = ['CONV', 'POOL', 'CONV', 'POOL', 'DENSE']
  return (
    <figure>
      <div className="rounded-showcase border border-line bg-raised p-5 md:p-6">
        <div className="flex items-start justify-between gap-3">
          <Eyebrow>Model / CNN Classifier</Eyebrow>
          <StatusLabel status="in-progress" />
        </div>
        <div className="mt-6 flex flex-col items-center gap-3">
          <div className="flex w-full items-center gap-3 rounded-lg border border-line bg-surface px-4 py-3">
            <Image aria-hidden="true" size={18} className="shrink-0 text-fg-secondary" />
            <div>
              <p className="text-sm font-medium text-fg">Retinal fundus image</p>
              <p className="font-mono text-meta text-fg-muted">INPUT / FUNDUS IMAGE</p>
            </div>
          </div>
          <ArrowDown aria-hidden="true" size={16} className="text-fg-muted" />
          <div className="flex flex-wrap items-center justify-center gap-2">
            {layers.map((layer, index) => (
              <span key={`${layer}-${index}`} className="flex items-center gap-2">
                <span className="rounded-md border border-line bg-surface px-3 py-2 font-mono text-meta text-fg-secondary">
                  {layer}
                </span>
                {index < layers.length - 1 && (
                  <ArrowRight aria-hidden="true" size={14} className="text-fg-muted" />
                )}
              </span>
            ))}
          </div>
          <ArrowDown aria-hidden="true" size={16} className="text-fg-muted" />
          <div className="grid w-full gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-line bg-surface px-4 py-3">
              <p className="text-sm font-medium text-fg">Five-class staging</p>
              <p className="font-mono text-meta text-fg-muted">OUTPUT / SOFTMAX · 5 CLASSES</p>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-line bg-surface px-4 py-3">
              <Eye aria-hidden="true" size={18} className="shrink-0 text-fg-secondary" />
              <div>
                <p className="text-sm font-medium text-fg">Grad-CAM explanation</p>
                <p className="font-mono text-meta text-fg-muted">METHOD / DECISIVE REGIONS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-4 text-meta text-fg-muted">
        Model architecture — the approach being explored. No metrics until evaluation.
      </figcaption>
    </figure>
  )
}

// The implemented app flow, verified on device for the lab final.
const FLOW_STEPS = [
  { icon: Smartphone, title: 'Splash', detail: 'ROUTES BY SESSION' },
  { icon: LogIn, title: 'Signup & Login', detail: 'LOCAL SQLITE AUTH' },
  { icon: LayoutGrid, title: 'Home', detail: 'BROWSE · SEARCH · FAVOURITES' },
  { icon: UtensilsCrossed, title: 'Product Details', detail: 'CUSTOMISE · QUANTITY' },
  { icon: CreditCard, title: 'Payment', detail: 'DEMO PAYMENT · BDT TOTAL' },
  { icon: CircleCheck, title: 'Order Success', detail: 'ORDER SAVED TO SQLITE' },
]

/** Project 002 visual — the real app flow, drawn as a diagram. */
function RabbyFlow() {
  return (
    <figure>
      <div className="rounded-showcase border border-line bg-raised p-5 md:p-6">
        <Eyebrow>Flow / RabbY-002</Eyebrow>
        <ol className="mt-6">
          {FLOW_STEPS.map((step, index) => (
            <li key={step.title}>
              <div className="flex items-center gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-line bg-surface text-fg-secondary">
                  <step.icon aria-hidden="true" size={18} />
                </span>
                <div>
                  <p className="text-sm font-medium text-fg">{step.title}</p>
                  <p className="font-mono text-meta text-fg-muted">{step.detail}</p>
                </div>
              </div>
              {index < FLOW_STEPS.length - 1 && (
                <div aria-hidden="true" className="ml-5 h-4 w-px bg-line" />
              )}
            </li>
          ))}
        </ol>
        <p className="mt-6 border-t border-line pt-5 font-mono text-meta text-fg-muted">
          FLOW / DIRECT CHECKOUT — NO CART SCREEN
        </p>
      </div>
      <figcaption className="mt-4 text-meta text-fg-muted">
        App flow — as implemented and verified on device for the lab final.
      </figcaption>
    </figure>
  )
}

function ProjectRow({ project, index }) {
  const Visual = project.visual === 'architecture' ? DrArchitecture : RabbyFlow
  return (
    <li className="border-t border-line pt-16 first:border-t-0 first:pt-0">
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className={index % 2 === 1 ? 'lg:order-2' : ''}>
          <Eyebrow>Project / {project.number}</Eyebrow>
          <h3 className="mt-4 text-project">{project.title}</h3>
          <p className="mt-2 font-mono text-meta text-fg-muted">{project.category}</p>
          <p className="mt-5 text-fg-secondary">{project.summary}</p>
          <dl className="mt-6 space-y-2.5">
            {project.metadata.map((row) => (
              <div key={row.label} className="flex gap-3 text-sm">
                <dt className="w-24 shrink-0 font-mono text-meta text-fg-muted">{row.label}</dt>
                <dd className="text-fg">{row.value}</dd>
              </div>
            ))}
            <div className="flex items-center gap-3 text-sm">
              <dt className="w-24 shrink-0 font-mono text-meta text-fg-muted">STATUS</dt>
              <dd>
                {project.status ? (
                  <StatusLabel status={project.status} />
                ) : (
                  <span className="text-fg">{project.statusText}</span>
                )}
              </dd>
            </div>
          </dl>
          <ul className="mt-6 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <li key={tag}>
                <TechTag>{tag}</TechTag>
              </li>
            ))}
          </ul>
          <div className="mt-7">
            {project.repoUrl ? (
              <Button href={project.repoUrl} variant="text" arrow>
                {project.repoLabel}
              </Button>
            ) : (
              <p className="font-mono text-meta text-fg-muted">CASE STUDY / IN PREPARATION</p>
            )}
          </div>
        </Reveal>
        <Reveal delay={0.1} className={index % 2 === 1 ? 'lg:order-1' : ''}>
          <Visual />
        </Reveal>
      </div>
    </li>
  )
}

/**
 * Featured Work (blueprint §03): editorial two-column project rows —
 * number, category, title, summary, metadata, technologies, status and
 * link on one side; a real diagram on the other. No thumbnail grids,
 * no invented results, status as text, never colour alone.
 */
export function FeaturedWork() {
  return (
    <Section id="work" labelledBy="work-heading">
      <Reveal>
        <SectionHeader id="work-heading" label="Featured Work" title="Real technical work." />
      </Reveal>
      <ol className="mt-12 space-y-16 lg:space-y-20">
        {projects.map((project, index) => (
          <ProjectRow key={project.id} project={project} index={index} />
        ))}
      </ol>
    </Section>
  )
}
