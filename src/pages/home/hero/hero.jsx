import { Button } from '@/shared/ui/button'
import './hero.css'

export function Hero() {
  return (
    <section className="hero" id="top">
      <img className="hero-bg" src="/images/hero.png" alt="Woman" />

      <div className="hero-content">
        <h1 className="hero-title">Work wonders</h1>
        <p className="hero-text">
          Be more effective with smart contracts that make work faster, and life easier.
        </p>
        <div className="hero-buttons">
          <Button>Get Oneflow free</Button>
          <Button color="dark">Take a tour</Button>
        </div>
      </div>
    </section>
  )
}
