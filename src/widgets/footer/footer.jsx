import { SubscribeForm } from '@/features/subscribe-form/subscribe-form'
import { LanguageSwitch } from '@/features/language-switch/language-switch'
import './footer.css'

const columns = [
  {
    title: 'Why Oneflow',
    links: [
      'Product tour',
      'Smart contracts',
      'Built for scale',
      'Integrations',
      'Customer stories',
    ],
  },
  { title: 'Learn', links: ['FAQ', 'Onboarding', 'Developers', 'Help Center', 'E-sign guide'] },
  {
    title: 'Security',
    links: ['Security Center', 'Reliability', 'Compliance', 'E-signing legality', 'GDPR'],
  },
  {
    title: 'More Oneflow',
    links: ['About us', 'Pricing', 'Partners', 'Blog', 'Careers', 'Contact'],
  },
]

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <img className="footer-logo" src="/images/logo.png" alt="Oneflow" />
            <address className="footer-address">
              <p>Headquarters:</p>
              <p>Hudiksvallsgatan 8</p>
              <p>113 30 Stockholm, Sweden</p>
              <p>+46 8 517 297 70</p>
            </address>
          </div>

          <div className="footer-cols">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="footer-title">{column.title}</h3>
                <ul className="footer-list">
                  {column.links.map((link) => (
                    <li key={link}>{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-cta">
          <div>
            <h3 className="footer-cta-title">Get in the flow</h3>
            <p className="footer-cta-text">
              Send, track and sign your contracts free for the rest of your life. No trickery.
            </p>
          </div>
          <SubscribeForm />
        </div>

        <div className="footer-bottom">
          <ul className="footer-legal">
            <li>Login</li>
            <li>Privacy</li>
            <li>Cookie statement</li>
          </ul>
          <LanguageSwitch />
        </div>
      </div>
    </footer>
  )
}
