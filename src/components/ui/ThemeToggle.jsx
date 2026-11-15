import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/cn'
import { useTheme } from '@/theme'

/** Switches between the dark (default) and light presentations. */
export function ThemeToggle({ className }) {
  const { theme, toggleTheme } = useTheme()
  const next = theme === 'dark' ? 'light' : 'dark'
  const Icon = theme === 'dark' ? Sun : Moon

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${next} theme`}
      className={cn(
        'inline-flex size-11 items-center justify-center rounded-full border border-line text-fg-secondary transition-colors duration-200 hover:bg-hover hover:text-fg',
        className,
      )}
    >
      <Icon aria-hidden="true" size={18} />
    </button>
  )
}
