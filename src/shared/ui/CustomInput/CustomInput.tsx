import { ForwardedRef, forwardRef, memo } from 'react';
import classNames from 'classnames';
import styles from './CustomInput.module.scss';
import { FieldValues, Path } from 'react-hook-form';

interface CustomInputProps<T extends FieldValues> {
  id: string;
  placeholder?: string;
  label: string;
  // onChange: (id: string, value: T) => void;
  name: Path<T>;
  autoComplete?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
}

export const CustomInput = memo(
  forwardRef(function CustomInput<T extends FieldValues>(
    props: CustomInputProps<T>,
    ref: ForwardedRef<HTMLInputElement | null>,
  ) {
    const { id, label, name, className, onChange, placeholder } = props;

    return (
      <div className={classNames(className)}>
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
        <input
          name={name}
          className={styles.input}
          id={id}
          type='text'
          placeholder={placeholder}
          ref={ref}
          onChange={onChange}
        />
      </div>
    );
  }),
);

CustomInput.displayName = 'CustomInput';
