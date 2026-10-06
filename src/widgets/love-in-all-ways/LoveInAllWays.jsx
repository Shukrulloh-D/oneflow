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
