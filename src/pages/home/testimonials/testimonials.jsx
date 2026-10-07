import { TestimonialCard } from '@/entities/testimonial/testimonial-card'
import './testimonials.css'

const testimonials = [
  {
    quote:
      'With Oneflow, I’ve been able to reduce the time spent on admin significantly. Every hour that I used to spend on admin, can now be spent on selling and closing!',
    name: 'Mattias Johnson',
    role: 'Key Account Manager',
    company: 'Bewico',
    avatar: '/images/avatar-mattias.png',
  },
  {
    quote:
      'The fact that Oneflow is 100% digital makes it so simple and flexible. It gives us peace of mind by providing control and a complete overview of our contract process at all times.',
    name: 'Elin Skoglund',
    role: 'HR Business Partner',
    company: 'Hadin Bil',
    avatar: '/images/avatar-elin.png',
  },
  {
    quote:
      'From board meeting protocols to GDPR agreements, and approval of keycards — Oneflow has removed the pains we weren’t even aware of.',
    name: 'Tor Nyhrman',
    role: 'Head of Indirect Sourcing',
    company: 'Systembolaget',
    avatar: '/images/avatar-tor.png',
  },
  {
    // TODO: это временный отзыв, взять настоящий из Figma
    quote:
      'All our contracts now live in one place instead of in email threads. Signing takes minutes, and everyone works on the same version.',
    name: 'Jonas Lind',
    role: 'Sales Manager',
    company: 'Nordic Co.',
    avatar: '/images/avatar-jonas.png',
  },
]

export function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="testimonials__title">Don’t just take our word for it…</h2>

        <div className="testimonials__track">
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
