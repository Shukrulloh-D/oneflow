import { Button } from '@/shared/ui/Button'
import { images } from '@/shared/images'
import { SITE } from '@/shared/config/site'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero" id="top" style={{ backgroundImage: `url(${images.hero})` }}>
      <div className="hero__inner">
        <h1 className="hero__title">Work wonders</h1>
        <p className="hero__text">
          Be more effective with smart contracts that make work faster, and life easier.
        </p>
        <div className="hero__actions">
          <Button href={SITE.links.signup}>Get Oneflow free</Button>
          <Button variant="dark" href="#product-tour">
            Take a tour
          </Button>
        </div>
      </div>
    </section>
  )
}
