import { Button } from '@/shared/ui/Button'
import { images } from '@/shared/images'
import { SITE } from '@/shared/config/site'
import './BelieveYourEyes.css'

export function BelieveYourEyes() {
  return (
    <section className="believe" id="demo">
      <div className="container">
        <div className="believe__box">
          <img className="believe__img" src={images.believe} alt="" />
          <div className="believe__content">
            <h2 className="believe__title">Believe your eyes</h2>
            <p className="believe__text">
              Let us show you how to work smarter with contracts in Oneflow.
            </p>
            <Button size="sm" href={SITE.links.demo}>
              Get a demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
