import { getIntegrationLabel } from '../lib/getIntegrationLabel'
import './IntegrationLogo.css'

export function IntegrationLogo({ item }) {
  return (
    <div className="integration-logo" style={{ '--col': item.col, '--row': item.row }}>
      <img src={item.logo} alt={getIntegrationLabel(item)} loading="lazy" />
    </div>
  )
}
