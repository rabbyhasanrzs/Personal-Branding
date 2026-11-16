import { GraduationCap } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Reveal } from '@/components/motion/Reveal'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TechTag } from '@/components/ui/TechTag'

// Education only. No achievements are documented anywhere in the approved
// content, so none are shown — the achievements half of this section is
// added only when verified achievements exist.
const FOCUS_AREAS = [
  'Machine Learning',
  'Deep Learning',
  'Generative AI',
  'Software Engineering',
  'AI Research',
]

/**
 * Education (the user's Section 7): the one verified academic fact —
 * Computer Science & Engineering at Dhaka International University —
 * with its focus areas and links to the work it produces. No dates are
 * shown because none are documented; no achievements are invented.
 */
export function Education() {
  return (
    <Section id="education" labelledBy="education-heading">
      <Reveal>
        <SectionHeader
          id="education-heading"
          label="Education"
          title="Studying Computer Science & Engineering."
        />
      </Reveal>

      <Reveal delay={0.05}>
        <article className="mt-12 max-w-3xl rounded-showcase border border-line bg-raised p-6 md:p-8">
          <div className="flex items-start justify-between gap-3">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-line bg-surface text-fg-secondary">
              <GraduationCap aria-hidden="true" size={20} />
            </span>
            <p className="font-mono text-meta text-fg-muted">STATUS / STUDENT</p>
          </div>
          <h3 className="mt-6 text-project">Computer Science &amp; Engineering</h3>
          <p className="mt-2 font-medium text-fg">Dhaka International University</p>
          <p className="mt-4 max-w-[65ch] text-fg-secondary">
            Computer Science and Engineering student at Dhaka International University, with a
            growing focus on Artificial Intelligence and Machine Learning.
          </p>
          <ul className="mt-6 flex flex-wrap gap-1.5">
            {FOCUS_AREAS.map((area) => (
              <li key={area}>
                <TechTag>{area}</TechTag>
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-6">
            <Button href="#work" variant="text" arrow>
              RabbY Food Delivery app
            </Button>
            <Button href="#research" variant="text" arrow>
              Diabetic Retinopathy research
            </Button>
          </div>
        </article>
      </Reveal>
    </Section>
  )
}
