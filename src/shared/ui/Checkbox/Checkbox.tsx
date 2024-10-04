import { memo } from 'react';
import classNames from 'classnames';
import styles from './Checkbox.module.scss';

interface CheckboxProps {
  className?: string;
  labelText: string;
  id: string;
}

export const Checkbox = memo(({ className, labelText, id }: CheckboxProps) => {
  return (
    <>
      <input type='checkbox' id={id} className={styles.checkbox} />
      <label className={classNames(styles.label_mob, className)} htmlFor={id}>
        {labelText}
      </label>
    </>
  );
});
Checkbox.displayName = 'Checkbox';
