import { cn } from '../lib'
import './Container.css'

export function Container({ className, children, ...props }) {
  return (
    <div className={cn('container', className)} {...props}>
      {children}
    </div>
  )
}
