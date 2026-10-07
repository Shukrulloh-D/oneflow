import { Button } from '@/shared/ui/Button'
import { Icon } from '@/shared/ui/Icon'
import { images } from '@/shared/images'
import { platformFeatures } from '../data'
import './PlatformFeatures.css'

export function PlatformFeatures() {
  return (
    <section
      className="platform"
      id="platform"
      style={{ backgroundImage: `url(${images.platform})` }}
    >
      <div className="container">
        <div>
          <h2 className="platform__title">The complete platform for smart contracts</h2>
        </div>

        <div className="platform__items">
          {platformFeatures.map((feature, i) => (
            <div key={feature.id} className={`platform__item platform__item--${feature.align}`}>
              <span className="platform__icon">
                <Icon name={feature.icon} size={40} />
              </span>
              <h3 className="platform__item-title">{feature.title}</h3>
              <p className="platform__item-text">{feature.text}</p>
              <Button variant="dark" size="xs" href="#product-tour">
                Take the tour
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
