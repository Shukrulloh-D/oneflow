import { Button } from '@/shared/ui/button'
import './resource-card.css'

// карточка статьи. item.variant: featured | dark | story | pink
export function ResourceCard({ item }) {
  // синяя карточка customer story без картинки
  if (item.variant === 'story') {
    return (
      <article className="resource-card resource-card--story">
        <span className="resource-card__tag">{item.tag}</span>
        <h3 className="resource-card__brand">{item.title}</h3>
        <Button color="outline" size="xs">
          Read full story
        </Button>
      </article>
    )
  }

  const picture = <img className="resource-card__img" src={item.image} alt="" />

  return (
    <article className={`resource-card resource-card--${item.variant}`}>
      {item.variant !== 'featured' && picture}
      <div className="resource-card__body">
        <span className="resource-card__tag">{item.tag}</span>
        <h3 className="resource-card__title">{item.title}</h3>
        <p className="resource-card__meta">
          <span>{item.category}</span>
          <span>{item.minutes} min read</span>
        </p>
      </div>
      {item.variant === 'featured' && picture}
    </article>
  )
}
