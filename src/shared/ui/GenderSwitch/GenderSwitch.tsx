import { memo } from 'react';
import styles from './GenderSwitch.module.scss';

export const GenderSwitch = memo(() => {
  return (
    <div>
      <label className={styles.gender}>Пол</label>
      <fieldset className={styles.switch}>
        <input
          id='man'
          name='view'
          type='radio'
          defaultChecked
          className={styles.input}
        />
        <label className={styles.label} htmlFor='man'>
          М
        </label>

        <input id='women' name='view' type='radio' className={styles.input} />
        <label className={styles.label} htmlFor='women'>
          Ж
        </label>

        <span className={styles.switch_button}></span>
      </fieldset>
    </div>
  );
});
GenderSwitch.displayName = 'GenderSwitch';
