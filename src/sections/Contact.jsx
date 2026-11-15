import { Section } from '@/components/layout/Section'
import { Reveal } from '@/components/motion/Reveal'
import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { site } from '@/data/site'

/**
 * Contact (blueprint §09): make professional contact straightforward.
 * Only verified links are shown — GitHub for now. Email and LinkedIn
 * are added once verified; no placeholder links, ever.
 */
export function Contact() {
  return (
    <Section id="contact" tone="surface" labelledBy="contact-heading">
      <Reveal className="mx-auto max-w-3xl text-center">
        <Eyebrow>Contact</Eyebrow>
        <h2 id="contact-heading" className="mt-4 text-section">
          Have a project, idea, or opportunity in mind?
        </h2>
        <p className="mx-auto mt-5 max-w-[65ch] text-fg-secondary">
          I&apos;m interested in learning, collaborating, contributing to engineering projects,
          and connecting with people working across AI/ML and software development.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href={site.links.github} variant="primary" size="lg" arrow>
            Get in Touch
          </Button>
        </div>
        <p className="mt-6 font-mono text-meta text-fg-muted">GITHUB — RABBYHASANRZS</p>
      </Reveal>
    </Section>
  )
}
