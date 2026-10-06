import { Button, Container, Reveal } from '@/shared/ui'
import { images } from '@/shared/assets'
import { ANCHORS, anchorHref } from '@/shared/config'
import './SmartContracts.css'

export function SmartContracts() {
  return (
    <section className="smart" id={ANCHORS.smartContracts}>
      <Container className="smart__inner">
        <Reveal className="smart__text">
          <h2 className="smart__title">Turn signatures into smart contracts</h2>
          <p className="smart__lead">
            Experience true contract magic by automating the entire contract process — from
            creating to signing and managing.
          </p>
          <Button variant="yellow" size="sm" href={anchorHref(ANCHORS.productTour)}>
            Take our product tour
          </Button>
        </Reveal>
        <Reveal className="smart__media" delay={150}>
          <img
            src={images.smartContracts}
            alt="Contract editor, signing and analytics cards"
            width="501"
            height="501"
          />
        </Reveal>
      </Container>
    </section>
  )
}
