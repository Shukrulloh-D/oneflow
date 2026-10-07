import { Button } from '@/shared/ui/Button'
import { images } from '@/shared/images'
import './SmartContracts.css'

export function SmartContracts() {
  return (
    <section className="smart" id="smart-contracts">
      <div className="container smart__inner">
        <div className="smart__text">
          <h2 className="smart__title">Turn signatures into smart contracts</h2>
          <p className="smart__lead">
            Experience true contract magic by automating the entire contract process — from creating
            to signing and managing.
          </p>
          <Button size="sm" href="#product-tour">
            Take our product tour
          </Button>
        </div>
        <div className="smart__media">
          <img src={images.smartContracts} alt="Contract editor, signing and analytics cards" />
        </div>
      </div>
    </section>
  )
}
