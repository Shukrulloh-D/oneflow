import './button.css'

// color: yellow | dark | outline      size: md | sm | xs
export function Button({ color = 'yellow', size = 'md', children, ...props }) {
  return (
    <button className={`btn btn--${color} btn--${size}`} {...props}>
      {children}
    </button>
  )
}
