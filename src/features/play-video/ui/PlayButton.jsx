import { Icon } from '@/shared/ui'
import { cn } from '@/shared/lib'
import './PlayButton.css'

export function PlayButton({ onClick, className }) {
  return (
    <button className={cn('play-button', className)} type="button" aria-label="Play video" onClick={onClick}>
      <Icon name="play" size={28} />
    </button>
  )
}
