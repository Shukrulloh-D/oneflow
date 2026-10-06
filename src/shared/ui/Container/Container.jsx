import { cn } from '@/shared/lib/cn';
import styles from './Container.module.css';

export function Container({ children, className }) {
  return <div className={cn(styles.container, className)}>{children}</div>;
}
