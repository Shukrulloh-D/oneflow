import { Button } from '@/shared/ui/button'
import './smart-contracts.css'

export function SmartContracts() {
  return (
    <section className="smart" id="smart-contracts">
      <div className="container smart-inner">
        <div>
          <h2 className="smart-title">Turn signatures into smart contracts</h2>
          <p className="smart-text">
            Experience true contract magic by automating the entire contract process — from creating
            to signing and managing.
          </p>
          <Button size="sm">Take our product tour</Button>
        </div>
        <img className="smart-img" src="/images/smart-contracts.png" alt="Contract cards" />
      </div>
    </section>
  )
}
