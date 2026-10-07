import { Button } from '@/shared/ui/button'
import './smart-contracts.css'

export function SmartContracts() {
  return (
    <section className="smart" id="smart-contracts">
      <div className="container smart__inner">
        <div>
          <h2 className="smart__title">Turn signatures into smart contracts</h2>
          <p className="smart__text">
            Experience true contract magic by automating the entire contract process — from creating
            to signing and managing.
          </p>
          <Button size="sm">Take our product tour</Button>
        </div>

        <img className="smart__img" src="/images/smart-contracts.png" alt="Contract cards" />
      </div>
    </section>
  )
}
