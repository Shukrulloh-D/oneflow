import { Link } from 'react-router-dom'
import { Button } from '@/shared/ui'
import { SITE } from '@/shared/config'
import { DemoButton } from '@/features/request-demo'
import { NAV_ITEMS } from '../model/nav'

export function MobileMenu({ onNavigate }) {
  return (
    <div className="mobile-menu" onClick={(e) => e.target.closest('a') && onNavigate()}>
      <ul className="mobile-menu__list">
        {NAV_ITEMS.map((item) => (
          <li key={item.label}>
            <Link className="mobile-menu__link" to={item.to}>
              {item.label}
            </Link>
            {item.children && (
              <ul className="mobile-menu__sub">
                {item.children.map((child) => (
                  <li key={child.label}>
                    <Link to={child.to}>{child.label}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div className="mobile-menu__actions">
        <DemoButton source="mobile-menu" size="md" />
        <Button variant="outline" href={SITE.links.login}>
          Log in
        </Button>
      </div>
    </div>
  )
}
