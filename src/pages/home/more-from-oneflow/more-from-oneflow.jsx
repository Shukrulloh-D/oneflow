import { Button } from '@/shared/ui/button'
import './more-from-oneflow.css'

const cards = [
  {
    image: '/images/more-1.png',
    label: 'One platform. All departments',
    title: 'Create, sign and manage any type of agreement you can think of',
  },
  {
    image: '/images/more-2.png',
    label: 'Customer stories',
    title: 'Six reasons why teams around the world love the magic of flow',
  },
]

export function MoreFromOneflow() {
  return (
    <section className="more" id="more">
      <div className="container">
        <h2 className="more-title">More from Oneflow</h2>

        <div className="more-grid">
          {cards.map((card) => (
            <article className="promo-card" key={card.title}>
              <img className="promo-card-img" src={card.image} alt="Картинки" />
              <p className="promo-card-label">{card.label}</p>
              <h3 className="promo-card-title">{card.title}</h3>
              <Button size="xs">Find out more</Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
