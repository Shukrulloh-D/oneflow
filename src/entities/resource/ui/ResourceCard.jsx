import { Link } from 'react-router-dom'
import { Button } from '@/shared/ui'
import { getResourceMeta } from '../lib/getResourceMeta'
import './ResourceCard.css'

function Meta({ item }) {
  const parts = getResourceMeta(item)
  if (parts.length === 0) return null
  return (
    <p className="resource-card__meta">
      {parts.map((part) => (
        <span key={part}>{part}</span>
      ))}
    </p>
  )
}

export function ResourceCard({ item }) {
  const { variant, tag, title, image, cta, href } = item

  if (variant === 'story') {
    return (
      <article className="resource-card resource-card--story">
        <span className="resource-card__tag">{tag}</span>
        <h3 className="resource-card__brand">{title}</h3>
        <Button variant="outline" size="xs" href={href} className="resource-card__btn">
          {cta}
        </Button>
      </article>
    )
  }

  return (
    <article className={`resource-card resource-card--${variant}`}>
      {variant !== 'featured' && (
        <img className="resource-card__img" src={image} alt="" loading="lazy" />
      )}
      <div className="resource-card__body">
        <span className="resource-card__tag">{tag}</span>
        <h3 className="resource-card__title">
          <Link to={href}>{title}</Link>
        </h3>
        <Meta item={item} />
      </div>
      {variant === 'featured' && (
        <img className="resource-card__img" src={image} alt="" loading="lazy" />
      )}
    </article>
  )
}
