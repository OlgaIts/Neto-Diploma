import { ForwardedRef, forwardRef, memo } from 'react';
import { FieldValues, Path } from 'react-hook-form';
import classNames from 'classnames';
import styles from './Checkbox.module.scss';

interface CheckboxProps<T extends FieldValues> {
  className?: string;
  labelText: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: Path<T>;
}

export const Checkbox = memo(
  forwardRef(function Checkbox<T extends FieldValues>(
    props: CheckboxProps<T>,
    ref: ForwardedRef<HTMLInputElement | null>,
  ) {
    const { id, labelText, onChange, className, name } = props;
    return (
      <>
        <input
          type='checkbox'
          id={id}
          className={styles.checkbox}
          onChange={onChange}
          name={name}
          ref={ref}
        />
        <label className={classNames(styles.label_mob, className)} htmlFor={id}>
          {labelText}
        </label>
      </>
    );
  }),
);
Checkbox.displayName = 'Checkbox';
