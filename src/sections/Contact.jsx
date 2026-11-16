import { Section } from '@/components/layout/Section'
import { Reveal } from '@/components/motion/Reveal'
import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { site } from '@/data/site'

/**
 * Contact (blueprint §09): make professional contact straightforward.
 * Only verified links are shown — GitHub, LinkedIn and email. No
 * placeholder links, ever.
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
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href={site.links.github} variant="primary" size="lg" arrow>
            Get in Touch
          </Button>
          <Button href={site.links.linkedin} variant="secondary" size="lg" arrow>
            Connect on LinkedIn
          </Button>
        </div>
        <p className="mt-6">
          <a
            href={`mailto:${site.links.email}`}
            className="font-mono text-meta text-fg-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
          >
            {site.links.email}
          </a>
        </p>
      </Reveal>
    </Section>
  )
}
