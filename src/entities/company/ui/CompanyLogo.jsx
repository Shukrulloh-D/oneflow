import './CompanyLogo.css'

export function CompanyLogo({ company }) {
  return <img className="company-logo" src={company.logo} alt={company.name} loading="lazy" />
}
