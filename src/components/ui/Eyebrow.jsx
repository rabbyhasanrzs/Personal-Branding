import { cn } from '@/lib/cn'

/**
 * Small monospaced technical label — section labels, identifiers, metadata
 * (e.g. "PROJECT / 001"). Keep these short and meaningful, not decorative.
 */
export function Eyebrow({ as: Tag = 'p', className, children, ...rest }) {
  return (
    <Tag
      className={cn('font-mono text-meta tracking-[0.08em] text-fg-muted uppercase', className)}
      {...rest}
    >
      {children}
    </Tag>
  )
}
