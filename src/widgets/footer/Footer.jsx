import { Logo } from '@/shared/ui/Logo'
import { SITE } from '@/shared/config/site'
import { SubscribeForm } from '@/features/subscribe-form/SubscribeForm'
import { LanguageSwitch } from '@/features/language-switch/LanguageSwitch'
import './Footer.css'

// link columns, the second value is a section id on this page
const columns = [
  {
    title: 'Why Oneflow',
    links: [
      ['Product tour', '#product-tour'],
      ['Smart contracts', '#smart-contracts'],
      ['Built for scale', '#platform'],
      ['Integrations', '#integrations'],
      ['Customer stories', '#testimonials'],
    ],
  },
  {
    title: 'Learn',
    links: [
      ['FAQ', '#more'],
      ['Onboarding', '#more'],
      ['Developers', '#more'],
      ['Help Center', '#more'],
      ['E-sign guide', '#resources'],
    ],
  },
  {
    title: 'Security',
    links: [
      ['Security Center', '#more'],
      ['Reliability', '#more'],
      ['Compliance', '#more'],
      ['E-signing legality', '#more'],
      ['GDPR', '#more'],
    ],
  },
  {
    title: 'More Oneflow',
    links: [
      ['About us', '#more'],
      ['Pricing', '#demo'],
      ['Partners', '#more'],
      ['Blog', '#resources'],
      ['Careers', '#more'],
      ['Contact', '#demo'],
    ],
  },
]

const legal = [
  ['Login', SITE.links.login],
  ['Privacy', '#top'],
  ['Cookie statement', '#top'],
]

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo light />
            <address className="footer__address">
              <p>{SITE.address.title}</p>
              {SITE.address.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p>{SITE.address.phone}</p>
            </address>
          </div>

          <nav className="footer__cols" aria-label="Footer">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="footer__col-title">{column.title}</h3>
                <ul className="footer__list">
                  {column.links.map(([label, to]) => (
                    <li key={label}>
                      <a href={to}>{label}</a>
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
            {legal.map(([label, to]) => (
              <li key={label}>
                <a href={to}>{label}</a>
              </li>
            ))}
          </ul>
          <LanguageSwitch light />
        </div>
      </div>
    </footer>
  )
}
