#!/bin/bash

# ============================================
# BARIONEAL — часть 2: виджеты + страница
# ============================================

# ============================================
# WIDGET: Header
# ============================================
cat > src/widgets/header/Header.module.css << 'END'
.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  padding: 32px 0;
  color: var(--color-text);
}

.row1 {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  margin-bottom: 32px;
}

.row2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  position: relative;
}

.nav {
  display: flex;
  gap: 44px;
  font-size: 15px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.nav a {
  transition: opacity 0.2s;
}

.nav a:hover { opacity: 0.6; }

.cart {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  margin-left: auto;
}

.burger {
  display: none;
  font-size: 24px;
  color: var(--color-text);
}

.mobile {
  display: none;
}

@media (max-width: 900px) {
  .row1 { display: none; }
  .nav {
    position: static;
    transform: none;
    gap: 20px;
    font-size: 13px;
  }
}

@media (max-width: 700px) {
  .nav { display: none; }
  .burger { display: block; }
  .mobile {
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #ffffff;
    padding: 24px;
    border-bottom: 1px solid #eaeaea;
  }
  .mobile a {
    font-size: 16px;
    padding: 8px 0;
  }
}
END

cat > src/widgets/header/Header.jsx << 'END'
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
END

echo "export { Header } from './Header';" > src/widgets/header/index.js

# ============================================
# WIDGET: Hero
# ============================================
cat > src/widgets/hero/Hero.module.css << 'END'
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 800px;
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #ffffff;
  width: 100%;
  max-width: 800px;
  padding: 0 24px;
}

.title {
  font-size: 72px;
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
}

.subtitle {
  font-size: 16px;
  opacity: 0.9;
}

.actions {
  position: absolute;
  bottom: 48px;
  left: 0;
  right: 0;
}

.actionsInner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
}

.reviews {
  position: absolute;
  left: 0;
  top: 45%;
  background: var(--pink);
  padding: 32px 14px;
  writing-mode: vertical-rl;
  transform: rotate(180deg) translateY(50%);
  font-size: 11px;
  letter-spacing: 0.4em;
  color: var(--color-text);
  z-index: 5;
}

@media (max-width: 900px) {
  .title { font-size: 40px; }
  .subtitle { font-size: 14px; }
  .reviews { display: none; }
  .actionsInner { flex-direction: column; gap: 12px; padding: 0 24px; }
}

@media (max-width: 640px) {
  .hero { min-height: 700px; }
  .title { font-size: 32px; }
}
END

cat > src/widgets/hero/Hero.jsx << 'END'
import { Button } from '@/shared/ui';
import { IMAGES } from '@/shared/config';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
    >
      <div className={styles.reviews}>REVIEWS</div>

      <div className={styles.center}>
        <h1 className={styles.title}>
          We Find Always<br />
          in All Ways
        </h1>
        <p className={styles.subtitle}>
          Our design ethos is gender-neutral and size-inclusive.
        </p>
      </div>

      <div className={styles.actions}>
        <div className={styles.actionsInner}>
          <Button variant="light">Shop Rings</Button>
          <Button variant="light">Book Appointment</Button>
        </div>
      </div>
    </section>
  );
}
END

echo "export { Hero } from './Hero';" > src/widgets/hero/index.js

# ============================================
# WIDGET: Wedding
# ============================================
cat > src/widgets/wedding/Wedding.module.css << 'END'
.section {
  padding: 120px 0 100px;
  text-align: center;
}

.eyebrow {
  display: block;
  font-size: 13px;
  margin-bottom: 20px;
}

.title {
  font-size: 56px;
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 60px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.card img {
  width: 100%;
  aspect-ratio: 255 / 303;
  object-fit: cover;
  border-radius: 2px;
  transition: transform 0.3s ease;
}

.card:hover img { transform: scale(1.02); }

.label {
  margin-top: 22px;
  font-size: 15px;
}

@media (max-width: 900px) {
  .title { font-size: 36px; margin-bottom: 40px; }
  .grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 500px) {
  .grid { grid-template-columns: 1fr; }
  .section { padding: 60px 0; }
}
END

cat > src/widgets/wedding/Wedding.jsx << 'END'
import { Container } from '@/shared/ui';
import { IMAGES } from '@/shared/config';
import styles from './Wedding.module.css';

const ITEMS = [
  { label: 'Cluster Rings', image: IMAGES.wedding1 },
  { label: 'Bands', image: IMAGES.wedding2 },
  { label: 'Rings', image: IMAGES.wedding3 },
  { label: 'Custom Design', image: IMAGES.wedding4 },
];

export function Wedding() {
  return (
    <section className={styles.section} id="wedding">
      <Container>
        <span className={styles.eyebrow}>Handcrafted Jewelry</span>
        <h2 className={styles.title}>Wedding &amp; Engagement</h2>
      </Container>

      <Container>
        <div className={styles.grid}>
          {ITEMS.map((item) => (
            <div key={item.label} className={styles.card}>
              <img src={item.image} alt={item.label} />
              <div className={styles.label}>{item.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
END

echo "export { Wedding } from './Wedding';" > src/widgets/wedding/index.js

# ============================================
# WIDGET: Sustainability
# ============================================
cat > src/widgets/sustainability/Sustainability.module.css << 'END'
.section {
  background: var(--green);
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 620px;
}

.image {
  background-size: cover;
  background-position: center;
  min-height: 620px;
}

.content {
  padding: 100px 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.eyebrow {
  font-size: 13px;
  margin-bottom: 20px;
}

.title {
  font-size: 52px;
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-bottom: 36px;
}

.text {
  font-size: 16px;
  line-height: 1.75;
  margin-bottom: 44px;
  max-width: 480px;
}

.tags {
  background: #ffffff;
  padding: 24px 0;
}

.tagsInner {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  font-size: 14px;
}

@media (max-width: 900px) {
  .grid { grid-template-columns: 1fr; }
  .image { min-height: 400px; }
  .content { padding: 60px 24px; }
  .title { font-size: 34px; }
}
END

cat > src/widgets/sustainability/Sustainability.jsx << 'END'
import { Button, Container } from '@/shared/ui';
import { IMAGES } from '@/shared/config';
import styles from './Sustainability.module.css';

const TAGS = ['Traceable Gems', 'Reclaimed Metals', 'Fairmined Gold', 'Love in All Ways', 'Small Footprint'];

export function Sustainability() {
  return (
    <section id="ethics">
      <div className={styles.section}>
        <div className={styles.grid}>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${IMAGES.ethical})` }}
          />

          <div className={styles.content}>
            <span className={styles.eyebrow}>Sustainability</span>
            <h2 className={styles.title}>An Ethical Approach</h2>

            <p className={styles.text}>
              Making jewelry requires responsibility to the earth that creates
              our materials and respect for the people who inhabit it. From day
              one, we committed to creating designs of ethical origins from
              mine to market.
            </p>

            <div>
              <Button variant="light">Learn More</Button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.tags}>
        <Container>
          <div className={styles.tagsInner}>
            {TAGS.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
END

echo "export { Sustainability } from './Sustainability';" > src/widgets/sustainability/index.js

# ============================================
# WIDGET: About
# ============================================
cat > src/widgets/about/About.module.css << 'END'
.section {
  background: var(--beige);
  padding: 140px 0;
  text-align: center;
}

.topIcon {
  width: 120px;
  margin: 0 auto 12px;
}

.label {
  font-size: 13px;
  margin-bottom: 60px;
}

.bigText {
  font-size: 44px;
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: -0.02em;
  max-width: 900px;
  margin: 0 auto;
}

@media (max-width: 900px) {
  .bigText { font-size: 26px; }
  .section { padding: 80px 0; }
}
END

cat > src/widgets/about/About.jsx << 'END'
import { Container } from '@/shared/ui';
import { IMAGES } from '@/shared/config';
import styles from './About.module.css';

export function About() {
  return (
    <section className={styles.section} id="about">
      <Container>
        <img className={styles.topIcon} src={IMAGES.ringTop} alt="" />
        <p className={styles.label}>About Us</p>

        <h2 className={styles.bigText}>
          Each Barioneal piece is crafted with ethically sourced precious
          metals to reflect our commitment to human rights and environmental
          sustainability.
        </h2>
      </Container>
    </section>
  );
}
END

echo "export { About } from './About';" > src/widgets/about/index.js

# ============================================
# WIDGET: Our Jewelry
# ============================================
cat > src/widgets/our-jewelry/OurJewelry.module.css << 'END'
.section {
  padding: 120px 0 100px;
  text-align: center;
}

.eyebrow {
  display: block;
  font-size: 13px;
  margin-bottom: 20px;
}

.title {
  font-size: 56px;
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 60px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.card img {
  width: 100%;
  aspect-ratio: 255 / 303;
  object-fit: cover;
  border-radius: 2px;
}

.label {
  margin-top: 22px;
  font-size: 15px;
}

@media (max-width: 900px) {
  .title { font-size: 36px; margin-bottom: 40px; }
  .grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 500px) {
  .grid { grid-template-columns: 1fr; }
  .section { padding: 60px 0; }
}
END

cat > src/widgets/our-jewelry/OurJewelry.jsx << 'END'
import { Container } from '@/shared/ui';
import { IMAGES } from '@/shared/config';
import styles from './OurJewelry.module.css';

const ITEMS = [
  { label: 'Rings', image: IMAGES.jewelry1 },
  { label: 'Bracelets', image: IMAGES.jewelry2 },
  { label: 'Necklaces', image: IMAGES.jewelry3 },
  { label: 'Earrings', image: IMAGES.jewelry4 },
];

export function OurJewelry() {
  return (
    <section className={styles.section} id="fine">
      <Container>
        <span className={styles.eyebrow}>Consciously Made</span>
        <h2 className={styles.title}>Our Jewelry</h2>

        <div className={styles.grid}>
          {ITEMS.map((item) => (
            <div key={item.label} className={styles.card}>
              <img src={item.image} alt={item.label} />
              <div className={styles.label}>{item.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
END

echo "export { OurJewelry } from './OurJewelry';" > src/widgets/our-jewelry/index.js

# ============================================
# WIDGET: Custom Design
# ============================================
cat > src/widgets/custom-design/CustomDesign.module.css << 'END'
.section {
  background: var(--green);
  padding: 140px 0;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.content { max-width: 520px; }

.eyebrow {
  display: block;
  font-size: 13px;
  margin-bottom: 20px;
}

.title {
  font-size: 64px;
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.05;
  margin-bottom: 40px;
}

.text {
  font-size: 16px;
  line-height: 1.75;
  margin-bottom: 40px;
}

.actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.image {
  display: flex;
  justify-content: flex-end;
}

.image img {
  width: 100%;
  max-width: 520px;
  aspect-ratio: 480 / 302;
  object-fit: cover;
  border-radius: 4px;
}

@media (max-width: 900px) {
  .grid { grid-template-columns: 1fr; gap: 40px; }
  .title { font-size: 40px; }
  .section { padding: 80px 0; }
  .image { justify-content: center; }
}
END

cat > src/widgets/custom-design/CustomDesign.jsx << 'END'
import { Button, Container } from '@/shared/ui';
import { IMAGES } from '@/shared/config';
import styles from './CustomDesign.module.css';

export function CustomDesign() {
  return (
    <section className={styles.section} id="custom">
      <Container>
        <div className={styles.grid}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>Tradition in the Making</span>
            <h2 className={styles.title}>Custom Design</h2>

            <p className={styles.text}>
              Whether you want to create a future heirloom that can be passed
              down or re-envision a current heirloom while maintaining its
              sentiment, our Custom process brings meaningful designs to life.
            </p>

            <div className={styles.actions}>
              <Button variant="light">Get Inspired</Button>
              <Button variant="light">Get an Estimate</Button>
            </div>
          </div>

          <div className={styles.image}>
            <img src={IMAGES.customDesign} alt="Custom Design" />
          </div>
        </div>
      </Container>
    </section>
  );
}
END

echo "export { CustomDesign } from './CustomDesign';" > src/widgets/custom-design/index.js

# ============================================
# WIDGET: Love in All Ways
# ============================================
cat > src/widgets/love-in-all-ways/LoveInAllWays.module.css << 'END'
.top {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 500px;
}

.topImage {
  background-size: cover;
  background-position: center;
  min-height: 500px;
}

.topContent {
  background: var(--blue);
  padding: 80px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.eyebrow {
  display: block;
  font-size: 13px;
  margin-bottom: 20px;
}

.title {
  font-size: 52px;
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-bottom: 28px;
}

.text {
  font-size: 16px;
  line-height: 1.75;
  margin-bottom: 36px;
  max-width: 500px;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
}

.gallery img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
}

@media (max-width: 900px) {
  .top { grid-template-columns: 1fr; }
  .topContent { padding: 60px 24px; }
  .title { font-size: 34px; }
  .gallery { grid-template-columns: repeat(2, 1fr); }
}
END

cat > src/widgets/love-in-all-ways/LoveInAllWays.jsx << 'END'
import { Button } from '@/shared/ui';
import { IMAGES } from '@/shared/config';
import styles from './LoveInAllWays.module.css';

const GALLERY = [IMAGES.gallery1, IMAGES.gallery2, IMAGES.gallery3, IMAGES.gallery4];

export function LoveInAllWays() {
  return (
    <section>
      <div className={styles.top}>
        <div
          className={styles.topImage}
          style={{ backgroundImage: `url(${IMAGES.loveCouple})` }}
        />

        <div className={styles.topContent}>
          <span className={styles.eyebrow}>The Heart of It</span>
          <h2 className={styles.title}>Love in All Ways</h2>

          <p className={styles.text}>
            We embrace love in all forms, and our jewelry is made to celebrate
            every milestone. We strive for inclusivity at every step, from a
            non-gendered design ethos and comprehensive sizing to our founding
            belief in marriage equality and the right to love who you choose.
          </p>

          <div>
            <Button variant="light">Learn More</Button>
          </div>
        </div>
      </div>

      <div className={styles.gallery}>
        {GALLERY.map((src, i) => (
          <img key={i} src={src} alt="" />
        ))}
      </div>
    </section>
  );
}
END

echo "export { LoveInAllWays } from './LoveInAllWays';" > src/widgets/love-in-all-ways/index.js

# ============================================
# WIDGET: Footer
# ============================================
cat > src/widgets/footer/Footer.module.css << 'END'
.footer {
  background: #ffffff;
  padding: 100px 0 40px;
}

.columns {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px;
  margin-bottom: 140px;
}

.colTitle {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 24px;
}

.col a {
  display: block;
  font-size: 14px;
  color: var(--color-text-muted);
  margin-bottom: 12px;
  transition: color 0.2s;
}

.col a:hover { color: var(--color-text); }

.center {
  text-align: center;
  margin-bottom: 80px;
}

.centerTitle {
  font-size: 56px;
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-bottom: 56px;
}

.subscribe {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  max-width: 720px;
  margin: 0 auto;
}

.subscribe input {
  flex: 1;
  padding: 18px 28px;
  border: 1px solid #e0e0e0;
  border-radius: var(--radius-pill);
  font-size: 14px;
  outline: none;
  background: #ffffff;
}

.subscribe input:focus { border-color: var(--green); }

.subscribe button {
  padding: 18px 44px;
  background: var(--green);
  border-radius: var(--radius-pill);
  font-size: 14px;
  font-weight: 500;
  transition: background 0.2s;
  white-space: nowrap;
}

.subscribe button:hover { background: #b5c8ae; }

.captcha {
  font-size: 12px;
  color: #999;
  margin-left: 8px;
}

.bottom {
  text-align: center;
  font-size: 13px;
  color: #999;
  padding-top: 40px;
  border-top: 1px solid #eaeaea;
}

@media (max-width: 900px) {
  .columns { grid-template-columns: repeat(2, 1fr); gap: 32px; margin-bottom: 60px; }
  .centerTitle { font-size: 32px; margin-bottom: 32px; }
  .subscribe { flex-direction: column; }
  .subscribe input,
  .subscribe button { width: 100%; }
}
END

cat > src/widgets/footer/Footer.jsx << 'END'
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
END

echo "export { Footer } from './Footer';" > src/widgets/footer/index.js

# ============================================
# PAGE: Home
# ============================================
cat > src/pages/home/HomePage.module.css << 'END'
/* У HomePage нет своих стилей — просто композиция виджетов */
END

cat > src/pages/home/HomePage.jsx << 'END'
import { Header } from '@/widgets/header';
import { Hero } from '@/widgets/hero';
import { Wedding } from '@/widgets/wedding';
import { Sustainability } from '@/widgets/sustainability';
import { About } from '@/widgets/about';
import { OurJewelry } from '@/widgets/our-jewelry';
import { CustomDesign } from '@/widgets/custom-design';
import { LoveInAllWays } from '@/widgets/love-in-all-ways';
import { Footer } from '@/widgets/footer';

/**
 * HomePage — только композиция.
 * Никакой логики, только порядок виджетов.
 */
export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Wedding />
        <Sustainability />
        <About />
        <OurJewelry />
        <CustomDesign />
        <LoveInAllWays />
      </main>
      <Footer />
    </>
  );
}
END

echo "export { HomePage } from './HomePage';" > src/pages/home/index.js

echo ""
echo "==========================================="
echo "ГОТОВО"
echo "==========================================="
echo ""
echo "Запусти: npm run dev"
echo ""
