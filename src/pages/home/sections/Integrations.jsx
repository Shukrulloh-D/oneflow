import { Button } from '@/shared/ui/Button'
import { integrations } from '../data'
import './Integrations.css'

export function Integrations() {
  return (
    <section className="integrations" id="integrations">
      <div className="container integrations__inner">
        <div className="integrations__text">
          <h2 className="integrations__title">Seamless integrations</h2>
          <p className="integrations__lead">
            Integrate your favorite tools with your contract workflow and work wonders.
          </p>
          <Button size="xs" href="#more">
            View all integrations
          </Button>
        </div>

        <div className="integrations__grid">
          {integrations.map((item) => (
            <div
              key={item.id}
              className="integration-logo"
              style={{ '--col': item.col, '--row': item.row }}
            >
              <img src={item.logo} alt="Integration logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
