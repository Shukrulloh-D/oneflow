import { cn, useInView } from '../lib'
import './Reveal.css'

// Fade + slide up when the block enters the screen
export function Reveal({ as: Tag = 'div', delay = 0, className, children, ...props }) {
  const [ref, inView] = useInView()

  return (
    <Tag
      ref={ref}
      className={cn('reveal', inView && 'is-visible', className)}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  )
}
