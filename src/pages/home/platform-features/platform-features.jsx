import { Button } from '@/shared/ui/button'
import './platform-features.css'

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
      <img className="platform-bg" src="/images/platform.png" alt="Hand" />

      <div className="container platform-inner">
        <h2 className="platform-title">The complete platform for smart contracts</h2>

        <div className="platform-items">
          {items.map((item) => (
            <div className={`platform-item platform-item--${item.align}`} key={item.title}>
              <span className="platform-icon">
                <img src={item.icon} alt="Icons" />
              </span>
              <h3 className="platform-item-title">{item.title}</h3>
              <p className="platform-item-text">{item.text}</p>
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
