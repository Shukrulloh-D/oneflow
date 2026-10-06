import { COMPANIES } from '../model/companies'

export function getCompanyById(id) {
  return COMPANIES.find((company) => company.id === id) ?? null
}
