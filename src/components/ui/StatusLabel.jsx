import { STATUSES } from '@/data/statuses'
import { cn } from '@/lib/cn'

/** Research/project status as text + icon (never colour alone). */
export function StatusLabel({ status, className }) {
  const entry = STATUSES[status]
  if (!entry) return null
  const Icon = entry.icon

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 font-mono text-meta text-fg-secondary',
        className,
      )}
    >
      <Icon aria-hidden="true" size={14} />
      {entry.label}
    </span>
  )
}
