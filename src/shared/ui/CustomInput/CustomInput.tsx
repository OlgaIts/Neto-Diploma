import { ChangeEvent, memo } from 'react';
import classNames from 'classnames';
import styles from './CustomInput.module.scss';

interface CustomInputProps<T = string> {
  className?: string;
  id: string;
  placeholder?: string;
  type: string;
  label: string;
  value?: T;
  onChange: (id: string, value: T) => void;
}

export const CustomInput = memo(
  ({
    className,
    id,
    placeholder,
    type = 'text',
    label,
    value,
    onChange,
  }: CustomInputProps) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChange(id, event.target.value);
    };

    return (
      <div className={classNames(className)}>
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
        <input
          className={styles.input}
          id={id}
          type={type}
          placeholder={placeholder}
          value={value as string}
          onChange={handleChange}
        />
      </div>
    );
  },
);
CustomInput.displayName = 'CustomInput';
