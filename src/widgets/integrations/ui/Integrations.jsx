import { Button, Container, Reveal } from '@/shared/ui'
import { ANCHORS } from '@/shared/config'
import { INTEGRATIONS, IntegrationLogo } from '@/entities/integration'
import './Integrations.css'

export function Integrations() {
  return (
    <section className="integrations" id={ANCHORS.integrations}>
      <Container className="integrations__inner">
        <Reveal className="integrations__text">
          <h2 className="integrations__title">Seamless integrations</h2>
          <p className="integrations__lead">
            Integrate your favorite tools with your contract workflow and work wonders.
          </p>
          <Button variant="yellow" size="xs" href="/about">
            View all integrations
          </Button>
        </Reveal>
        <Reveal className="integrations__grid" delay={150}>
          {INTEGRATIONS.map((item) => (
            <IntegrationLogo key={item.id} item={item} />
          ))}
        </Reveal>
      </Container>
    </section>
  )
}
