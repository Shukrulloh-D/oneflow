import './button.css'

export function Button({ color = 'yellow', size = 'md', children, ...props }) {
  return (
    <button className={`btn btn--${color} btn--${size}`} {...props}>
      {children}
    </button>
  )
}
