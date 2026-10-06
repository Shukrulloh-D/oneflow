import { Button, Container, Reveal } from '@/shared/ui'
import { ANCHORS, ROUTES } from '@/shared/config'
import { FEATURED_RESOURCE, RESOURCES, ResourceCard } from '@/entities/resource'
import './Resources.css'

export function Resources() {
  return (
    <section className="resources" id={ANCHORS.resources}>
      <Container>
        <Reveal className="resources__head">
          <h2 className="resources__title">And for our next trick…</h2>
          <Button variant="yellow" size="xs" href={ROUTES.blog}>
            Visit our blog
          </Button>
        </Reveal>

        <Reveal>
          <ResourceCard item={FEATURED_RESOURCE} />
        </Reveal>

        <div className="resources__grid">
          {RESOURCES.map((item, i) => (
            <Reveal key={item.id} delay={i * 100}>
              <ResourceCard item={item} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
