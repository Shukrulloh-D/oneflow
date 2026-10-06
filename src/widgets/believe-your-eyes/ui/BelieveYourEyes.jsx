import { Container, Reveal } from '@/shared/ui'
import { images } from '@/shared/assets'
import { ANCHORS } from '@/shared/config'
import { DemoButton } from '@/features/request-demo'
import './BelieveYourEyes.css'

export function BelieveYourEyes() {
  return (
    <section className="believe" id={ANCHORS.demo}>
      <Container>
        <Reveal className="believe__box">
          <img className="believe__img" src={images.believe} alt="" width="1152" height="594" />
          <div className="believe__content">
            <h2 className="believe__title">Believe your eyes</h2>
            <p className="believe__text">
              Let us show you how to work smarter with contracts in Oneflow.
            </p>
            <DemoButton source="believe-your-eyes" size="sm" />
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
