import './Logo.css'

export function Logo({ light }) {
  return <span className={light ? 'logo logo--light' : 'logo'}>oneflow</span>
}
