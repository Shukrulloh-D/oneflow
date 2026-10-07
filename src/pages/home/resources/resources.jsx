import { Button } from '@/shared/ui/button'
import { ResourceCard } from '@/entities/resource/resource-card'
import './resources.css'

const featured = {
  variant: 'featured',
  tag: 'Article',
  title: 'A Basic Guide on E-signatures and What Makes Them Legally Binding',
  category: 'E-signature',
  minutes: 7,
  image: '/images/resource-featured.png',
}

const cards = [
  {
    variant: 'dark',
    tag: 'Guide',
    title: '29 documents you can sign online in 2021',
    category: 'Contract automation',
    minutes: 6,
    image: '/images/resource-guide.png',
  },
  { variant: 'story', tag: 'Customer story', title: 'Sweco' },
  {
    variant: 'pink',
    tag: 'Article',
    title: 'Master digital sales: How to close deals when you’re not allowed to shake hands',
    category: 'Sales',
    minutes: 8,
    image: '/images/resource-article.png',
  },
]

export function Resources() {
  return (
    <section className="resources" id="resources">
      <div className="container">
        <div className="resources-head">
          <h2 className="resources-title">And for our next trick…</h2>
          <Button size="xs">Visit our blog</Button>
        </div>

        <ResourceCard item={featured} />

        <div className="resources-grid">
          {cards.map((card) => (
            <ResourceCard key={card.title} item={card} />
          ))}
        </div>
      </div>
    </section>
  )
}
