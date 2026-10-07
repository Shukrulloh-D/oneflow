import './TestimonialCard.css'

export function TestimonialCard({ item }) {
  return (
    <article className="testimonial-card">
      <blockquote className="testimonial-card__quote">“{item.quote}”</blockquote>
      <a className="testimonial-card__link" href="#resources">
        Read full story
      </a>
      <div className="testimonial-card__author">
        <img className="testimonial-card__avatar" src={item.avatar} alt="" />
        <div>
          <p className="testimonial-card__name">{item.name}</p>
          <p className="testimonial-card__role">{item.role}</p>
          <p className="testimonial-card__role">{item.company}</p>
        </div>
      </div>
    </article>
  )
}
