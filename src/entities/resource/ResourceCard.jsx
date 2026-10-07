import { Button } from '@/shared/ui/Button'
import './ResourceCard.css'

export function ResourceCard({ item }) {
  const { variant, tag, title, image, cta, category, readTime } = item

  // the blue customer story card has no image
  if (variant === 'story') {
    return (
      <article className="resource-card resource-card--story">
        <span className="resource-card__tag">{tag}</span>
        <h3 className="resource-card__brand">{title}</h3>
        <Button variant="outline" size="xs" href="#more">
          {cta}
        </Button>
      </article>
    )
  }

  const picture = <img className="resource-card__img" src={image} alt="" />

  return (
    <article className={`resource-card resource-card--${variant}`}>
      {variant !== 'featured' && picture}
      <div className="resource-card__body">
        <span className="resource-card__tag">{tag}</span>
        <h3 className="resource-card__title">
          <a href="#more">{title}</a>
        </h3>
        <p className="resource-card__meta">
          <span>{category}</span>
          <span>{readTime} min read</span>
        </p>
      </div>
      {variant === 'featured' && picture}
    </article>
  )
}
