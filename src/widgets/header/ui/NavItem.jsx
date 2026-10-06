import { Link } from 'react-router-dom'
import { Icon } from '@/shared/ui'
import { cn } from '@/shared/lib'

export function NavItem({ item }) {
  const hasChildren = Boolean(item.children?.length)

  return (
    <li className={cn('nav-item', hasChildren && 'nav-item--dropdown')}>
      <Link className="nav-item__link" to={item.to}>
        {item.label}
        {hasChildren && <Icon name="chevron-down" size={14} />}
      </Link>
      {hasChildren && (
        <ul className="nav-item__menu">
          {item.children.map((child) => (
            <li key={child.label}>
              <Link to={child.to}>{child.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}
