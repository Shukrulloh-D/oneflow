import { useState } from 'react';
import { Container } from '@/shared/ui';
import styles from './Header.module.css';

const NAV_ITEMS = [
  { label: 'Engagement', href: '#wedding' },
  { label: 'Wedding', href: '#wedding' },
  { label: 'Custom', href: '#custom' },
  { label: 'Fine Jewelry', href: '#fine' },
  { label: 'Ethics', href: '#ethics' },
  { label: 'About', href: '#about' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.row1}>
          <a href="#">Read our</a>
          <a href="#">Customer Reviews</a>
        </div>

        <div className={styles.row2}>
          <nav className={styles.nav}>
            {NAV_ITEMS.map((item) => (
              <a key={item.label} href={item.href}>{item.label}</a>
            ))}
          </nav>

          <div className={styles.cart}>
            <span>🛒</span>
            <span>0</span>
          </div>

          <button
            className={styles.burger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <nav className={styles.mobile}>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </Container>
    </header>
  );
}
