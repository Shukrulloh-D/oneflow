import { companies } from '../data'
import './ClientLogos.css'

export function ClientLogos() {
  return (
    <section className="client-logos" id="customers">
      <div className="container">
        <div>
          <h2 className="client-logos__title">Join these companies making business flow</h2>
          <ul className="client-logos__list">
            {companies.map((company) => (
              <li key={company.id}>
                <img className="company-logo" src={company.logo} alt={company.name} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
