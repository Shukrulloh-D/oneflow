import { Icon } from '@/shared/ui'
import './BurgerButton.css'

export function BurgerButton({ isOpen, onClick }) {
  return (
    <button
      className="burger"
      type="button"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      onClick={onClick}
    >
      <Icon name={isOpen ? 'close' : 'menu'} size={28} />
    </button>
  )
}
