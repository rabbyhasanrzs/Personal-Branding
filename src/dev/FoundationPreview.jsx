/**
 * TEMPORARY — foundation verification screen.
 * Exercises tokens, type scale, layout primitives, themes and base components.
 * Delete this folder (and its import in App.jsx) once real sections exist.
 */
import { Container, Section } from '@/components/layout'
import { Reveal } from '@/components/motion/Reveal'
import {
  Button,
  Eyebrow,
  SectionHeader,
  StatusLabel,
  TechTag,
  ThemeToggle,
} from '@/components/ui'
import { STATUSES } from '@/data/statuses'
import { site } from '@/data/site'
import { useTheme } from '@/theme'

const swatches = [
  { name: 'background', cls: 'bg-background' },
  { name: 'surface', cls: 'bg-surface' },
  { name: 'raised', cls: 'bg-raised' },
  { name: 'hover', cls: 'bg-hover' },
  { name: 'line', cls: 'bg-line' },
  { name: 'fg', cls: 'bg-fg' },
  { name: 'fg-secondary', cls: 'bg-fg-secondary' },
  { name: 'fg-muted', cls: 'bg-fg-muted' },
  { name: 'accent', cls: 'bg-accent' },
  { name: 'accent-violet', cls: 'bg-accent-violet' },
]

const typeScale = [
  { name: 'text-hero', cls: 'text-hero', sample: 'Hero headline' },
  { name: 'text-page', cls: 'text-page', sample: 'Page title' },
  { name: 'text-section', cls: 'text-section', sample: 'Section heading' },
  { name: 'text-project', cls: 'text-project', sample: 'Project title' },
]

function Breakpoint() {
  return (
    <span data-testid="breakpoint" className="font-mono text-meta text-fg-muted">
      <span className="sm:hidden">base · &lt;640</span>
      <span className="hidden sm:inline md:hidden">sm · 640+</span>
      <span className="hidden md:inline lg:hidden">md · 768+ (tablet)</span>
      <span className="hidden lg:inline xl:hidden">lg · 1024+</span>
      <span className="hidden xl:inline">xl · 1200+ (desktop)</span>
    </span>
  )
}

export default function FoundationPreview() {
  const { theme } = useTheme()

  return (
    <>
      <div className="border-b border-line bg-surface">
        <Container className="flex min-h-[var(--nav-h)] items-center justify-between gap-4">
          <span className="font-mono text-meta font-medium tracking-[0.08em] text-fg">
            {site.wordmark}
          </span>
          <div className="flex items-center gap-4">
            <Breakpoint />
            <ThemeToggle />
          </div>
        </Container>
      </div>

      <Section className="bg-hero-glow">
        <Eyebrow className="mb-6">Foundation check · theme: {theme}</Eyebrow>
        <h1 className="max-w-4xl text-hero">
          Building Intelligent Systems Through Research &amp; Engineering.
        </h1>
        <p className="mt-6 max-w-[65ch]">
          This screen is temporary. It verifies tokens, type scale, layout, themes and base
          components before any real section is built.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="#tokens" arrow size="lg">
            Primary action
          </Button>
          <Button href="#type" variant="secondary" size="lg">
            Secondary action
          </Button>
        </div>
      </Section>

      <Section id="tokens" tone="surface" labelledBy="tokens-title">
        <SectionHeader
          id="tokens-title"
          label="Colour tokens"
          title="Tokens swap with the theme."
        />
        <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-5">
          {swatches.map((s) => (
            <li key={s.name}>
              <div className={`h-16 rounded-panel border border-line ${s.cls}`} />
              <p className="mt-2 font-mono text-meta text-fg-muted">{s.name}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="type" labelledBy="type-title">
        <SectionHeader id="type-title" label="Typography" title="Fluid scale, Inter + JetBrains Mono." />
        <div className="mt-10 space-y-8">
          {typeScale.map((t) => (
            <Reveal key={t.name}>
              <p className="mb-2 font-mono text-meta text-fg-muted">{t.name}</p>
              <p className={`${t.cls} text-fg`}>{t.sample}</p>
            </Reveal>
          ))}
          <Reveal>
            <p className="mb-2 font-mono text-meta text-fg-muted">text-body · text-fg-secondary</p>
            <p className="max-w-[65ch]">
              Body copy uses Inter at a comfortable 1.6 line-height and stays near 65–75
              characters per line for readability.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="surface" labelledBy="components-title">
        <SectionHeader
          id="components-title"
          label="Components"
          title="Base components share one set of states."
        />
        <div className="mt-10 space-y-8">
          <div className="flex flex-wrap items-center gap-3">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="text" arrow>
              Text link
            </Button>
            <Button disabled>Disabled</Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {Object.keys(STATUSES).map((key) => (
              <StatusLabel key={key} status={key} />
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <TechTag>PYTHON</TechTag>
            <TechTag>JAVA</TechTag>
            <TechTag>SQLITE</TechTag>
          </div>
          <div className="rounded-card border border-line bg-raised p-6 md:p-8">
            <Eyebrow className="mb-3">Panel · radius-card</Eyebrow>
            <p>Cards are used sparingly; sections rely on bands, hairlines and whitespace.</p>
          </div>
        </div>
      </Section>
    </>
  )
}
