import { Section } from '@/components/layout/Section'
import { Reveal } from '@/components/motion/Reveal'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SectionHeader } from '@/components/ui/SectionHeader'

// Verified facts only (PORTFOLIO_CONTENT.md §7). No CV link —
// no current CV has been verified.
const FACTS = [
  { label: 'ROLE', value: 'Aspiring AI/ML Engineer' },
  {
    label: 'EDUCATION',
    value: 'Computer Science & Engineering, Dhaka International University',
  },
  {
    label: 'FOCUS',
    value:
      'Machine Learning · Deep Learning · Generative AI · Software Engineering · AI Research',
  },
  { label: 'CURRENTLY', value: 'Learning, researching and building' },
]

/**
 * About (blueprint §06): portrait, concise biography, current learning
 * direction, and a facts panel. The bio is the approved copy — worded
 * differently from the hero paragraph, never repeated verbatim. The closing
 * line uses Georgia, the one editorial typeface the design system allows
 * here. The portrait is `public/Professional Navy Suit Portrait.png`,
 * uploaded to the branch by the user via the GitHub web UI (binary files
 * cannot go through the text-only push).
 */
export function About() {
  return (
    <Section id="about" labelledBy="about-heading">
      <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
        <Reveal className="lg:col-span-3">
          <SectionHeader
            id="about-heading"
            label="A Little About Me"
            title="Curiosity is where meaningful engineering begins."
          />
          <div className="mt-8 space-y-5 text-fg-secondary">
            <p>
              I am Md. Rabby Hasan, a Computer Science and Engineering student at Dhaka
              International University with a growing focus on Artificial Intelligence and
              Machine Learning.
            </p>
            <p>
              My interests include Machine Learning, Deep Learning, Generative AI, Software
              Engineering, and AI research. I enjoy understanding how intelligent systems work,
              how models learn from data, and how research ideas can become practical
              applications.
            </p>
            <p>
              My learning journey combines software development with research-oriented
              experimentation. My work includes an Android food-delivery application and
              research-oriented exploration of diabetic-retinopathy classification and
              explainability using deep learning.
            </p>
            <p>
              I am continuously strengthening my programming, data analysis, software
              engineering, and machine learning foundations through hands-on learning and
              project development.
            </p>
          </div>
          <p className="mt-8 font-serif text-xl leading-relaxed text-fg">
            My goal is to grow into an AI/ML Engineer who can connect research, engineering,
            and real-world applications.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-2">
          <figure>
            <img
              src="/Professional Navy Suit Portrait.png"
              alt="Portrait of Md. Rabby Hasan"
              width="1122"
              height="1402"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-showcase border border-line object-cover"
            />
          </figure>
          <dl className="mt-6 rounded-showcase border border-line bg-raised p-6 md:p-7">
            {FACTS.map((fact) => (
              <div
                key={fact.label}
                className="border-b border-line py-4 first:pt-0 last:border-b-0 last:pb-0"
              >
                <dt>
                  <Eyebrow>{fact.label}</Eyebrow>
                </dt>
                <dd className="mt-2 text-fg">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}
