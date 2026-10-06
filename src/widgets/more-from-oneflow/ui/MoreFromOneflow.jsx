import { Container, Reveal } from '@/shared/ui'
import { ANCHORS } from '@/shared/config'
import { PROMOS, PromoCard } from '@/entities/promo-card'
import './MoreFromOneflow.css'

export function MoreFromOneflow() {
  return (
    <section className="more" id={ANCHORS.more}>
      <Container>
        <Reveal>
          <h2 className="more__title">More from Oneflow</h2>
        </Reveal>
        <div className="more__grid">
          {PROMOS.map((item, i) => (
            <Reveal key={item.id} delay={i * 100}>
              <PromoCard item={item} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
