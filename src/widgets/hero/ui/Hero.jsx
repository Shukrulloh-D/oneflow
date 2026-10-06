import { Button } from '@/shared/ui'
import { images } from '@/shared/assets'
import { ANCHORS, anchorHref } from '@/shared/config'
import { TryFreeButton } from '@/features/try-free'
import { HERO_CONTENT } from '../model/content'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero" id="top" style={{ backgroundImage: `url(${images.hero})` }}>
      <div className="hero__inner">
        <h1 className="hero__title">{HERO_CONTENT.title}</h1>
        <p className="hero__text">{HERO_CONTENT.text}</p>
        <div className="hero__actions">
          <TryFreeButton source="hero" />
          <Button variant="dark" href={anchorHref(ANCHORS.productTour)}>
            Take a tour
          </Button>
        </div>
      </div>
    </section>
  )
}
