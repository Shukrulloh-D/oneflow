import { Button, Container, Icon, Reveal } from '@/shared/ui'
import { images } from '@/shared/assets'
import { ANCHORS, anchorHref } from '@/shared/config'
import { PLATFORM_FEATURES } from '../model/features'
import './PlatformFeatures.css'

export function PlatformFeatures() {
  return (
    <section
      className="platform"
      id={ANCHORS.platform}
      style={{ backgroundImage: `url(${images.platform})` }}
    >
      <Container>
        <Reveal>
          <h2 className="platform__title">The complete platform for smart contracts</h2>
        </Reveal>

        <div className="platform__items">
          {PLATFORM_FEATURES.map((feature, i) => (
            <Reveal
              key={feature.id}
              className={`platform__item platform__item--${feature.align}`}
              delay={i * 80}
            >
              <span className="platform__icon">
                <Icon name={feature.icon} size={40} />
              </span>
              <h3 className="platform__item-title">{feature.title}</h3>
              <p className="platform__item-text">{feature.text}</p>
              <Button variant="dark" size="xs" href={anchorHref(ANCHORS.productTour)}>
                Take the tour
              </Button>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
