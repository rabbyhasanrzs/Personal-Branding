import { cn } from '@/lib/cn'

/**
 * The single centred content container. Width and gutters come from the
 * layout variables in index.css, so every section lines up.
 * size="default" → 1,200px content · size="wide" → 1,280px content.
 */
export function Container({ as: Tag = 'div', size = 'default', className, children, ...rest }) {
  return (
    <Tag
      className={cn(size === 'wide' ? 'container-wide' : 'container-page', className)}
      {...rest}
    >
      {children}
    </Tag>
  )
}
