import { Button } from '@/shared/ui/Button'
import { promos } from '../data'
import './MoreFromOneflow.css'

export function MoreFromOneflow() {
  return (
    <section className="more" id="more">
      <div className="container">
        <div>
          <h2 className="more__title">More from Oneflow</h2>
        </div>
        <div className="more__grid">
          {promos.map((item, i) => (
            <div key={item.id}>
              <article className="promo-card">
                <img className="promo-card__img" src={item.image} alt="" />
                <p className="promo-card__label">{item.label}</p>
                <h3 className="promo-card__title">{item.title}</h3>
                <Button size="xs" href="#demo">
                  Find out more
                </Button>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
