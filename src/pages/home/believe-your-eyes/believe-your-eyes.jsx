import { Button } from '@/shared/ui/button'
import './believe-your-eyes.css'

export function BelieveYourEyes() {
  return (
    <section className="believe" id="demo">
      <div className="believe-box">
        <img className="believe-img" src="/images/believe.png" alt="" />
        
        <div className="believe-container">
          <div className="believe-content">
            <h2 className="believe-title">Believe your eyes</h2>
            <p className="believe-text">
              Let us show you how to work smarter with contracts in Oneflow.
            </p>
            <Button size="sm">Get a demo</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
