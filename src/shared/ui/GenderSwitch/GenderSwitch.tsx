import { ChangeEvent, ForwardedRef, forwardRef, memo } from 'react';
import { FieldValues, Path } from 'react-hook-form';
import styles from './GenderSwitch.module.scss';

interface GenderSwitchProps<T extends FieldValues> {
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name: Path<T>;
  prefix: number;
}

export const GenderSwitch = memo(
  forwardRef(function GenderSwitch<T extends FieldValues>(
    props: GenderSwitchProps<T>,
    ref: ForwardedRef<HTMLInputElement | null>,
  ) {
    const { name, onChange, className, prefix } = props;

    return (
      <div className={className}>
        <label className={styles.gender}>Пол</label>
        <fieldset className={styles.switch}>
          <input
            id={`${prefix}-man`}
            name={name}
            type='radio'
            value='man'
            defaultChecked
            className={styles.input}
            onChange={onChange}
            ref={ref}
          />
          <label className={styles.label} htmlFor={`${prefix}-man`}>
            М
          </label>

          <input
            id={`${prefix}-woman`}
            name={name}
            type='radio'
            className={styles.input}
            value='woman'
            onChange={onChange}
            ref={ref}
          />
          <label className={styles.label} htmlFor={`${prefix}-woman`}>
            Ж
          </label>

          <span className={styles.switch_button}></span>
        </fieldset>
      </div>
    );
  }),
);

GenderSwitch.displayName = 'GenderSwitch';
