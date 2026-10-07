import { Button } from '@/shared/ui/Button'
import { ResourceCard } from '@/entities/resource/ResourceCard'
import { featuredResource, resources } from '@/entities/resource/data'
import './Resources.css'

export function Resources() {
  return (
    <section className="resources" id="resources">
      <div className="container">
        <div className="resources__head">
          <h2 className="resources__title">And for our next trick…</h2>
          <Button size="xs" href="#more">
            Visit our blog
          </Button>
        </div>

        <div>
          <ResourceCard item={featuredResource} />
        </div>

        <div className="resources__grid">
          {resources.map((item, i) => (
            <div key={item.id}>
              <ResourceCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
