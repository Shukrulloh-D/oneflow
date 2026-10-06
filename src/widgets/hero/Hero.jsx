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
