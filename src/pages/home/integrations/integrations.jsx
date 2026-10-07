import { Button } from '@/shared/ui/button'
import './integrations.css'

export function Integrations() {
  return (
    <section className="integrations" id="integrations">
      <div className="container integrations__inner">
        <div>
          <h2 className="integrations__title">Seamless integrations</h2>
          <p className="integrations__text">
            Integrate your favorite tools with your contract workflow and work wonders.
          </p>
          <Button size="xs">View all integrations</Button>
        </div>

        {/* 10 логотипов, расставлены в CSS как в Figma */}
        <div className="integrations__grid">
          <div className="integration">
            <img src="/images/integration-1.png" alt="" />
          </div>
          <div className="integration">
            <img src="/images/integration-2.png" alt="" />
          </div>
          <div className="integration">
            <img src="/images/integration-3.png" alt="" />
          </div>
          <div className="integration">
            <img src="/images/integration-4.png" alt="" />
          </div>
          <div className="integration">
            <img src="/images/integration-5.png" alt="" />
          </div>
          <div className="integration">
            <img src="/images/integration-6.png" alt="" />
          </div>
          <div className="integration">
            <img src="/images/integration-7.png" alt="" />
          </div>
          <div className="integration">
            <img src="/images/integration-8.png" alt="" />
          </div>
          <div className="integration">
            <img src="/images/integration-9.png" alt="" />
          </div>
          <div className="integration">
            <img src="/images/integration-10.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
