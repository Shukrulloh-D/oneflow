import './Button.css'

// variant: yellow | dark | outline      size: md | sm | xs
// with href it is a link, without href it is a button
export function Button({ variant = 'yellow', size = 'md', href, children, ...props }) {
  const className = `btn btn--${variant} btn--${size}`

  if (href) {
    const isExternal = href.startsWith('http')
    return (
      <a
        className={className}
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={className} type="button" {...props}>
      {children}
    </button>
  )
}
