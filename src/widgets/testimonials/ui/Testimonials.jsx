import { Container, Reveal } from '@/shared/ui'
import { ANCHORS } from '@/shared/config'
import { Slider } from '@/features/slider'
import { TESTIMONIALS, TestimonialCard } from '@/entities/testimonial'
import './Testimonials.css'

export function Testimonials() {
  return (
    <section className="testimonials" id={ANCHORS.testimonials}>
      <Container>
        <Reveal>
          <h2 className="testimonials__title">Don’t just take our word for it…</h2>
          <Slider gap={24} perView={{ desktop: 3.3, tablet: 2, mobile: 1.1 }}>
            {TESTIMONIALS.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </Slider>
        </Reveal>
      </Container>
    </section>
  )
}
