import { memo } from 'react';
import classNames from 'classnames';
import styles from './Switch.module.scss';

interface SwitchProps {
  className?: string;
}

export const Switch = memo(({ className }: SwitchProps) => {
  return (
    <label className={classNames(styles.label, className)}>
      <input type="checkbox" className={styles.input} />
      <span className={styles.slider}></span>
    </label>
  );
});
Switch.displayName = 'Switch';
