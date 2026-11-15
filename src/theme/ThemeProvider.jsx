import { useCallback, useEffect, useMemo, useState } from 'react'
import { ThemeContext } from './ThemeContext'
import { DEFAULT_THEME, STORAGE_KEY, THEMES, THEME_COLORS } from './constants'

// index.html sets data-theme before first paint, so read it back instead of
// guessing again — React and the DOM can never disagree on first render.
function readInitialTheme() {
  const current = document.documentElement.getAttribute('data-theme')
  return THEMES.includes(current) ? current : DEFAULT_THEME
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(readInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', THEME_COLORS[theme])
  }, [theme])

  const setTheme = useCallback((next) => {
    if (!THEMES.includes(next)) return
    setThemeState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Storage can be blocked (private mode); the theme still applies for this visit.
    }
  }, [])

  const toggleTheme = useCallback(
    () => setTheme(theme === 'dark' ? 'light' : 'dark'),
    [theme, setTheme],
  )

  const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme, setTheme, toggleTheme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
