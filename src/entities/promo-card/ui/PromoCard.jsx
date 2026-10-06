import { Button } from '@/shared/ui'
import './PromoCard.css'

export function PromoCard({ item }) {
  return (
    <article className="promo-card">
      <img className="promo-card__img" src={item.image} alt="" width="560" height="315" loading="lazy" />
      <p className="promo-card__label">{item.label}</p>
      <h3 className="promo-card__title">{item.title}</h3>
      <Button variant="yellow" size="xs" href={item.href}>
        {item.cta}
      </Button>
    </article>
  )
}
