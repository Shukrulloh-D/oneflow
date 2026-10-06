import { images } from '@/shared/assets'
import { ANCHORS, SITE } from '@/shared/config'
import { PlayButton, VideoLayer, useVideoPlayback } from '@/features/play-video'
import './PressPlay.css'

export function PressPlay() {
  const { isOpen, open, close } = useVideoPlayback()

  return (
    <section
      className="press-play"
      id={ANCHORS.productTour}
      style={{ backgroundImage: `url(${images.pressPlay})` }}
    >
      <h2 className="press-play__title">
        <span>Press</span>
        <span>play</span>
      </h2>
      <PlayButton className="press-play__button" onClick={open} />
      {isOpen && <VideoLayer src={SITE.videoSrc} poster={images.pressPlay} onClose={close} />}
    </section>
  )
}
