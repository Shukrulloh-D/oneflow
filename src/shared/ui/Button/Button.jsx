import { cn } from '@/shared/lib/cn';
import styles from './Button.module.css';

/**
 * Кнопка-пилюля.
 * variant: light | dark | outline
 */
export function Button({ children, variant = 'light', onClick, className }) {
  return (
    <button
      type="button"
      className={cn(styles.btn, styles[`btn--${variant}`], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
