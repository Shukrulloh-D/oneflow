import './testimonial-card.css'

// карточка отзыва: item = { quote, name, role, company, avatar }
export function TestimonialCard({ item }) {
  return (
    <article className="testimonial-card">
      <p className="testimonial-card__quote">“{item.quote}”</p>
      <span className="testimonial-card__link">Read full story</span>
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
