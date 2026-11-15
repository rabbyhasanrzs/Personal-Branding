import { motion } from 'framer-motion'

/**
 * Short fade + upward reveal, played once when scrolled into view.
 * Reduced motion is handled globally by <MotionConfig reducedMotion="user">
 * in main.jsx: transforms are dropped and only the opacity change remains.
 * Use sparingly — it should clarify hierarchy, not decorate every block.
 */
export function Reveal({ as = 'div', delay = 0, y = 16, className, children, ...rest }) {
  const Component = motion[as] ?? motion.div
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </Component>
  )
}
