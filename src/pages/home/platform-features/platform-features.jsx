import { Button } from '@/shared/ui/button'
import './platform-features.css'

// align: где блок стоит на странице (шахматный порядок)
const items = [
  {
    icon: '/images/friction.svg',
    align: 'right',
    title: 'Forget friction',
    text: 'Experience a truly digital contract process that makes creating, signing, and managing agreements quick, smooth, and effortless. Contracts without trickery.',
  },
  {
    icon: '/images/data.svg',
    align: 'left',
    title: 'Unleash data',
    text: 'Get faster and smarter with automated processes and intelligent insights that unlock the data inside your agreements. Leave behind the limitations of paper and PDFs. Just like that.',
  },
  {
    icon: '/images/control.svg',
    align: 'mid',
    title: 'Take control',
    text: 'Know what’s happening in real-time with a complete overview of all your contracts, all in one place. It’s all the visibility and transparency you need, at your fingertips.',
  },
]

export function PlatformFeatures() {
  return (
    <section className="platform" id="platform">
      <img className="platform__bg" src="/images/platform.png" alt="" />

      <div className="container platform__inner">
        <h2 className="platform__title">The complete platform for smart contracts</h2>

        <div className="platform__items">
          {items.map((item) => (
            <div className={`platform__item platform__item--${item.align}`} key={item.title}>
              <span className="platform__icon">
                <img src={item.icon} alt="" />
              </span>
              <h3 className="platform__item-title">{item.title}</h3>
              <p className="platform__item-text">{item.text}</p>
              <Button color="dark" size="xs">
                Take the tour
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
