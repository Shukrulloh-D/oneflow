import { Link } from 'react-router-dom'
import { Button, Logo } from '@/shared/ui'
import { cn, useScrolled } from '@/shared/lib'
import { ROUTES, SITE } from '@/shared/config'
import { BurgerButton, useMobileMenu } from '@/features/mobile-menu'
import { DemoButton } from '@/features/request-demo'
import { LanguageSwitcher } from '@/features/change-language'
import { NAV_ITEMS } from '../model/nav'
import { NavItem } from './NavItem'
import { MobileMenu } from './MobileMenu'
import './Header.css'

export function Header() {
  const scrolled = useScrolled(10)
  const { isOpen, toggle, close } = useMobileMenu()

  return (
    <header className={cn('header', (scrolled || isOpen) && 'header--scrolled', isOpen && 'header--open')}>
      <div className="header__bar">
        <Link to={ROUTES.home} className="header__logo" aria-label="Oneflow – home">
          <Logo />
        </Link>

        <nav className="header__nav" aria-label="Main">
          <ul className="header__list">
            {NAV_ITEMS.map((item) => (
              <NavItem key={item.label} item={item} />
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <DemoButton source="header" size="sm" />
          <Button variant="outline" size="sm" href={SITE.links.login}>
            Log in
          </Button>
          <LanguageSwitcher />
        </div>

        <BurgerButton isOpen={isOpen} onClick={toggle} />
      </div>

      {isOpen && <MobileMenu onNavigate={close} />}
    </header>
  )
}
