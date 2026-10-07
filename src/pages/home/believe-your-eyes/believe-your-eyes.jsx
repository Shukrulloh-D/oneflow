import { Button } from '@/shared/ui/button'
import './believe-your-eyes.css'

export function BelieveYourEyes() {
  return (
    <section className="believe" id="demo">
      <div className="container">
        <div className="believe__box">
          <img className="believe__img" src="/images/believe.png" alt="" />

          <div className="believe__content">
            <h2 className="believe__title">Believe your eyes</h2>
            <p className="believe__text">
              Let us show you how to work smarter with contracts in Oneflow.
            </p>
            <Button size="sm">Get a demo</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
