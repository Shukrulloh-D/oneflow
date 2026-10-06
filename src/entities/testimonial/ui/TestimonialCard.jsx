import { Link } from 'react-router-dom'
import { getAuthorLabel } from '../lib/getAuthorLabel'
import './TestimonialCard.css'

export function TestimonialCard({ item }) {
  return (
    <article className="testimonial-card" aria-label={getAuthorLabel(item)}>
      <blockquote className="testimonial-card__quote">“{item.quote}”</blockquote>
      <Link className="testimonial-card__link" to={item.storyUrl}>
        Read full story
      </Link>
      <footer className="testimonial-card__author">
        <img className="testimonial-card__avatar" src={item.avatar} alt="" width="40" height="40" />
        <div>
          <p className="testimonial-card__name">{item.name}</p>
          <p className="testimonial-card__role">{item.role}</p>
          <p className="testimonial-card__role">{item.company}</p>
        </div>
      </footer>
    </article>
  )
}
