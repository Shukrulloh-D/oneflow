import { Container, Reveal } from '@/shared/ui'
import { ANCHORS } from '@/shared/config'
import { COMPANIES, CompanyLogo } from '@/entities/company'
import './ClientLogos.css'

export function ClientLogos() {
  return (
    <section className="client-logos" id={ANCHORS.customers}>
      <Container>
        <Reveal>
          <h2 className="client-logos__title">Join these companies making business flow</h2>
          <ul className="client-logos__list">
            {COMPANIES.map((company) => (
              <li key={company.id}>
                <CompanyLogo company={company} />
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}
