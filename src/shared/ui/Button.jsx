import { Link } from 'react-router-dom'
import { cn } from '../lib'
import './Button.css'

const isExternal = (href) => /^(https?:|mailto:|tel:)/.test(href)

// variant: yellow | dark | outline | light     size: md | sm | xs
export function Button({
  variant = 'yellow',
  size = 'md',
  href,
  blockOnMobile = true,
  className,
  children,
  ...props
}) {
  const classes = cn(
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    blockOnMobile && size === 'md' && 'btn--block-mobile',
    className
  )

  if (href && isExternal(href)) {
    return (
      <a className={classes} href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )
  }
  if (href) {
    return (
      <Link className={classes} to={href} {...props}>
        {children}
      </Link>
    )
  }
  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  )
}
