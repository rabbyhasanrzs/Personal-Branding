import { Eye, Image, ListOrdered, Network, SlidersHorizontal } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Reveal } from '@/components/motion/Reveal'
import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { StatusLabel } from '@/components/ui/StatusLabel'
import { TechTag } from '@/components/ui/TechTag'

// The research approach behind Project 001, drawn as a diagram —
// the method, not results. No accuracy or outcome is claimed here.
const PIPELINE_STEPS = [
  { icon: Image, title: 'Retinal fundus images', detail: 'INPUT / FUNDUS IMAGES' },
  { icon: SlidersHorizontal, title: 'Image preparation', detail: 'PREPARE / CLEAN · STANDARDIZE' },
  { icon: Network, title: 'Deep-learning classifier', detail: 'MODEL / CNN' },
  { icon: Eye, title: 'Model explainability', detail: 'METHOD / GRAD-CAM' },
  { icon: ListOrdered, title: 'Five-class staging', detail: 'OUTPUT / 5 DR STAGES' },
]

// The standard five diabetic-retinopathy stages (ICDR scale) — the classes
// the classifier is being built to distinguish, not a reported result.
const DR_CLASSES = ['No DR', 'Mild', 'Moderate', 'Severe', 'Proliferative']

/**
 * Hero / identity (blueprint §5): eyebrow, headline, supporting paragraph,
 * two CTAs, technical line and current-status line on the left; a real
 * technical visual — the DR research pipeline — on the right (60/40 on
 * desktop, text first on mobile). The violet/blue glow sits behind the
 * visual only, via the bg-hero-glow utility.
 */
export function Hero() {
  return (
    <Section id="hero" labelledBy="hero-heading" className="relative overflow-hidden bg-hero-glow">
      <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
        <Reveal className="lg:col-span-3">
          <Eyebrow>Computer Science · AI/ML Engineering · Research</Eyebrow>
          <h1 id="hero-heading" className="mt-5 text-hero">
            Building Intelligent Systems Through Research &amp; Engineering.
          </h1>
          <p className="mt-6 max-w-[65ch] text-fg-secondary">
            I&apos;m Md. Rabby Hasan, a Computer Science and Engineering student at Dhaka
            International University, exploring machine learning, deep learning, generative AI,
            and practical software engineering through research, experimentation, and project
            development.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#work" variant="primary" size="lg" arrow>
              Explore My Work
            </Button>
            <Button href="#research" variant="secondary" size="lg">
              Research &amp; Notes
            </Button>
          </div>
          <p className="mt-10 font-mono text-meta tracking-[0.08em] text-fg-muted">
            ML / DL / GENAI / SOFTWARE ENGINEERING
          </p>
          <p className="mt-4 flex items-center gap-2.5 text-sm text-fg-secondary">
            <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
            Currently: Learning, researching and building.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-2">
          <div className="rounded-showcase border border-line bg-raised p-5 md:p-6">
            <div className="flex items-start justify-between gap-3">
              <Eyebrow>Pipeline / DR-001</Eyebrow>
              <StatusLabel status="in-progress" />
            </div>
            <ol className="mt-6">
              {PIPELINE_STEPS.map((step, index) => (
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
                  {index < PIPELINE_STEPS.length - 1 && (
                    <div aria-hidden="true" className="ml-5 h-4 w-px bg-line" />
                  )}
                </li>
              ))}
            </ol>
            <div className="mt-6 border-t border-line pt-5">
              <p className="font-mono text-meta text-fg-muted">OUTPUT / FIVE-CLASS STAGING</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {DR_CLASSES.map((name) => (
                  <li key={name}>
                    <TechTag>{name}</TechTag>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-4 text-meta text-fg-muted">
            Research approach — Project 001: Diabetic Retinopathy Classification &amp;
            Explainability. Results appear here only after evaluation.
          </p>
        </Reveal>
      </div>
    </Section>
  )
}
