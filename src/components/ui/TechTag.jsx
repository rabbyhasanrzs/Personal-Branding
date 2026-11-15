import { cn } from '@/lib/cn'

/** A technology / method tag, e.g. "PYTHON", "CNN", "SQLITE". */
export function TechTag({ className, children }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border border-line bg-raised px-2.5 py-1 font-mono text-meta text-fg-secondary',
        className,
      )}
    >
      {children}
    </span>
  )
}
