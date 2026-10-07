import { Button } from '@/shared/ui/button'
import './hero.css'

export function Hero() {
  return (
    <section className="hero" id="top">
      <img className="hero__bg" src="/images/hero.png" alt="" />

      <div className="hero__content">
        <h1 className="hero__title">Work wonders</h1>
        <p className="hero__text">
          Be more effective with smart contracts that make work faster, and life easier.
        </p>
        <div className="hero__buttons">
          <Button>Get Oneflow free</Button>
          <Button color="dark">Take a tour</Button>
        </div>
      </div>
    </section>
  )
}
