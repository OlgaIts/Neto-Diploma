import { memo } from 'react';
import styles from './GenderSwitch.module.scss';

interface GenderSwitchProps {
  className?: string;
  onChange: (value: string) => void;
}

export const GenderSwitch = memo(
  ({ className, onChange }: GenderSwitchProps) => {
    return (
      <div className={className}>
        <label className={styles.gender}>Пол</label>
        <fieldset className={styles.switch}>
          <input
            id='man'
            name='view'
            type='radio'
            defaultChecked
            className={styles.input}
            value='man'
            onChange={() => onChange('man')}
          />
          <label className={styles.label} htmlFor='man'>
            М
          </label>

          <input
            id='woman'
            name='view'
            type='radio'
            className={styles.input}
            value='woman'
            onChange={() => onChange('woman')}
          />
          <label className={styles.label} htmlFor='woman'>
            Ж
          </label>

          <span className={styles.switch_button}></span>
        </fieldset>
      </div>
    );
  },
);
GenderSwitch.displayName = 'GenderSwitch';
