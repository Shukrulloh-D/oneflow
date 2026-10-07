import { useEffect, useState } from 'react'
import { Button } from '@/shared/ui/Button'
import { Icon } from '@/shared/ui/Icon'
import { Logo } from '@/shared/ui/Logo'
import { SITE } from '@/shared/config/site'
import { LanguageSwitch } from '@/features/language-switch/LanguageSwitch'
import './Header.css'

// menu links, "sub" is the dropdown on desktop
const links = [
  {
    name: 'Why Oneflow?',
    href: '#features',
    sub: [
      ['Product tour', '#product-tour'],
      ['Smart contracts', '#smart-contracts'],
      ['Built for scale', '#platform'],
      ['Integrations', '#integrations'],
      ['Customer stories', '#testimonials'],
    ],
  },
  {
    name: 'Learn',
    href: '#resources',
    sub: [
      ['Articles', '#resources'],
      ['More from Oneflow', '#more'],
    ],
  },
  { name: 'Pricing', href: '#demo' },
  { name: 'About', href: '#more' },
  { name: 'Blog', href: '#resources' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // change the header color when the page is scrolled
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={scrolled || menuOpen ? 'header header--scrolled' : 'header'}>
      <div className="header__bar">
        <a href="#top">
          <Logo />
        </a>

        <nav className={menuOpen ? 'nav nav--open' : 'nav'} onClick={() => setMenuOpen(false)}>
          <ul className="nav__list">
            {links.map((link) => (
              <li className="nav__item" key={link.name}>
                <a href={link.href}>{link.name}</a>
                {link.sub && (
                  <ul className="nav__sub">
                    {link.sub.map(([name, href]) => (
                      <li key={name}>
                        <a href={href}>{name}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="nav__buttons">
            <Button size="sm" href={SITE.links.demo}>
              Get a demo
            </Button>
            <Button size="sm" variant="outline" href={SITE.links.login}>
              Log in
            </Button>
          </div>
        </nav>

        <LanguageSwitch />

        <button
          className="burger"
          type="button"
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={28} />
        </button>
      </div>
    </header>
  )
}
