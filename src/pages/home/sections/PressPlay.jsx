import { useState } from 'react'
import { Icon } from '@/shared/ui/Icon'
import { images } from '@/shared/images'
import { SITE } from '@/shared/config/site'
import './PressPlay.css'

export function PressPlay() {
  const [playing, setPlaying] = useState(false)

  return (
    <section
      className="press-play"
      id="product-tour"
      style={{ backgroundImage: `url(${images.pressPlay})` }}
    >
      <h2 className="press-play__title">
        <span>Press</span>
        <span>play</span>
      </h2>

      <button
        className="play-button press-play__button"
        type="button"
        aria-label="Play video"
        onClick={() => setPlaying(true)}
      >
        <Icon name="play" size={28} />
      </button>

      {playing && (
        <div className="video-layer">
          <video className="video-layer__video" src={SITE.videoSrc} controls autoPlay />
          <button
            className="video-layer__close"
            type="button"
            aria-label="Close video"
            onClick={() => setPlaying(false)}
          >
            <Icon name="close" size={24} />
          </button>
        </div>
      )}
    </section>
  )
}
