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
