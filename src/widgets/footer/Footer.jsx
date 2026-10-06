import { Container } from '@/shared/ui';
import styles from './Footer.module.css';

const COLUMNS = [
  {
    title: 'Get In Touch',
    links: ['Contact', 'Appointments', 'Philadelphia Shop', 'NYC Shop', 'Newsletter', 'Get an Estimate'],
  },
  {
    title: 'About',
    links: ['Who We Are', 'Blog', 'Careers', 'Reviews', 'Press'],
  },
  {
    title: 'Social',
    links: ['Instagram', 'Facebook', 'Twitter', 'Pinterest'],
  },
  {
    title: 'Policy',
    links: ['Log In', 'Privacy', 'Terms', 'Returns & Exchanges', 'Accessibility'],
  },
  {
    title: 'FAQs',
    links: ['Warranty & Repairs', 'Ring Resizing', 'Jewelry Care', 'Hand-Made For You', 'Shipping', 'International Orders'],
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.columns}>
          {COLUMNS.map((col) => (
            <div key={col.title} className={styles.col}>
              <div className={styles.colTitle}>{col.title}</div>
              {col.links.map((link) => (
                <a key={link} href="#">{link}</a>
              ))}
            </div>
          ))}
        </div>

        <div className={styles.center}>
          <h2 className={styles.centerTitle}>
            We Find Always<br />in All Ways.
          </h2>

          <form className={styles.subscribe} onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email Address" />
            <button type="submit">Subscribe</button>
            <span className={styles.captcha}>CAPTCHA</span>
          </form>
        </div>

        <div className={styles.bottom}>
          © 2024 Barioneal. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
