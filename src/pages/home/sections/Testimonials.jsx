import { useRef } from 'react'
import { Icon } from '@/shared/ui/Icon'
import { TestimonialCard } from '@/entities/testimonial/TestimonialCard'
import { testimonials } from '@/entities/testimonial/data'
import './Testimonials.css'

export function Testimonials() {
  const track = useRef(null)

  // scroll the cards left (-1) or right (1) by one card
  function scroll(direction) {
    const cardWidth = track.current.firstElementChild.offsetWidth
    track.current.scrollBy({ left: direction * (cardWidth + 24), behavior: 'smooth' })
  }

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="testimonials__title">Don’t just take our word for it…</h2>

        <div className="testimonials__track" ref={track}>
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>

        <div className="testimonials__arrows">
          <button
            className="testimonials__arrow"
            type="button"
            aria-label="Previous"
            onClick={() => scroll(-1)}
          >
            <Icon name="chevron-left" size={20} />
          </button>
          <button
            className="testimonials__arrow"
            type="button"
            aria-label="Next"
            onClick={() => scroll(1)}
          >
            <Icon name="chevron-right" size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
