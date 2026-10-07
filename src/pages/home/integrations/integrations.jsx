import { Button } from '@/shared/ui/button'
import './integrations.css'

export function Integrations() {
  return (
    <section className="integrations" id="integrations">
      <div className="container integrations-inner">
        <div>
          <h2 className="integrations-title">Seamless integrations</h2>
          <p className="integrations-text">
            Integrate your favorite tools with your contract workflow and work wonders.
          </p>
          <Button size="xs">View all integrations</Button>
        </div>

        <div className="integrations-grid">
          <div className="integration">
            <img src="/images/integration-1.png" alt="ИНТЕЛ" />
          </div>
          <div className="integration">
            <img src="/images/integration-2.png" alt="ГАНТЕЛИ" />
          </div>
          <div className="integration">
            <img src="/images/integration-3.png" alt="СИНИЙ КРУГЛИК" />
          </div>
          <div className="integration">
            <img src="/images/integration-4.png" alt="СОВА" />
          </div>
          <div className="integration">
            <img src="/images/integration-5.png" alt="ТРЕУГОЛЬНИК" />
          </div>
          <div className="integration">
            <img src="/images/integration-6.png" alt="UP" />
          </div>
          <div className="integration">
            <img src="/images/integration-7.png" alt="ОБЛАКО" />
          </div>
          <div className="integration">
            <img src="/images/integration-8.png" alt="ОРАНЖЕВИК" />
          </div>
          <div className="integration">
            <img src="/images/integration-9.png" alt="БУКВА Т" />
          </div>
          <div className="integration">
            <img src="/images/integration-1.png" alt="ИНТЕЛ" />
          </div>
        </div>
      </div>
    </section>
  )
}
