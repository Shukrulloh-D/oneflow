import { Link } from 'react-router-dom'
import { Container, Logo } from '@/shared/ui'
import { SITE } from '@/shared/config'
import { SubscribeForm } from '@/features/subscribe-form'
import { LanguageSwitcher } from '@/features/change-language'
import { FOOTER_COLUMNS, LEGAL_LINKS } from '../model/links'
import './Footer.css'

const isExternal = (to) => /^https?:/.test(to)

function FooterLink({ to, children }) {
  return isExternal(to) ? (
    <a href={to} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <Link to={to}>{children}</Link>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__top">
          <div className="footer__brand">
            <Logo variant="light" />
            <address className="footer__address">
              <p>{SITE.address.title}</p>
              {SITE.address.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p>{SITE.address.phone}</p>
            </address>
          </div>

          <nav className="footer__cols" aria-label="Footer">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title}>
                <h3 className="footer__col-title">{column.title}</h3>
                <ul className="footer__list">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <FooterLink to={link.to}>{link.label}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="footer__cta">
          <div>
            <h3 className="footer__cta-title">Get in the flow</h3>
            <p className="footer__cta-text">
              Send, track and sign your contracts free for the rest of your life. No trickery.
            </p>
          </div>
          <SubscribeForm />
        </div>

        <div className="footer__bottom">
          <ul className="footer__legal">
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <FooterLink to={link.to}>{link.label}</FooterLink>
              </li>
            ))}
          </ul>
          <LanguageSwitcher placement="up" tone="light" />
        </div>
      </Container>
    </footer>
  )
}
