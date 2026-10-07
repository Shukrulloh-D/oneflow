import { useState } from 'react'
import { Button } from '@/shared/ui/button'
import { LanguageSwitch } from '@/features/language-switch/language-switch'
import './header.css'

// пункты меню. sub - выпадающий список на компьютере
const menu = [
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
  // открыто ли меню на телефоне
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="header__bar">
        <a href="#top">
          <img className="header__logo" src="/images/logo.svg" alt="Oneflow" />
        </a>

        <nav className={open ? 'nav nav--open' : 'nav'} onClick={() => setOpen(false)}>
          <ul className="nav__list">
            {menu.map((item) => (
              <li className="nav__item" key={item.name}>
                <a href={item.href}>
                  {item.name}
                  {item.sub && ' ▾'}
                </a>
                {item.sub && (
                  <ul className="nav__sub">
                    {item.sub.map(([name, href]) => (
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
            <Button size="sm">Get a demo</Button>
            <Button size="sm" color="outline">
              Log in
            </Button>
          </div>
        </nav>

        <LanguageSwitch />

        <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>
      </div>
    </header>
  )
}
