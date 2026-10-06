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
