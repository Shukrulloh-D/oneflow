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
