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
