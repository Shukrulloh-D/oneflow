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
