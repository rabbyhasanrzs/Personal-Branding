import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionConfig } from 'framer-motion'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@/theme'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      {/* "user" honours prefers-reduced-motion for every Framer Motion animation. */}
      <MotionConfig reducedMotion="user">
        <App />
      </MotionConfig>
    </ThemeProvider>
  </StrictMode>,
)
