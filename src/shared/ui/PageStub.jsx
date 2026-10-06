import { Container } from './Container'
import './PageStub.css'

// Temporary page body for pages that are not designed yet
export function PageStub({ title, text = 'This page is a stub. Content will be added later.' }) {
  return (
    <section className="page-stub">
      <Container>
        <h1 className="page-stub__title">{title}</h1>
        <p className="page-stub__text">{text}</p>
      </Container>
    </section>
  )
}
