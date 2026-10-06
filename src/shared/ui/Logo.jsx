import { cn } from '../lib'
import './Logo.css'

// variant: dark | light
export function Logo({ variant = 'dark', className }) {
  return (
    <span className={cn('logo', `logo--${variant}`, className)}>
      <span className="logo__text">oneflow</span>
      <svg className="logo__dots" viewBox="0 0 12 12" aria-hidden="true">
        <rect x="5" y="0" width="3" height="3" />
        <rect x="9" y="3" width="3" height="3" />
        <rect x="1" y="4" width="3" height="3" />
        <rect x="5" y="8" width="3" height="3" />
      </svg>
    </span>
  )
}
