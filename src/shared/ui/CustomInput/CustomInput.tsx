import { ChangeEvent, memo } from 'react';
import classNames from 'classnames';
import styles from './CustomInput.module.scss';

interface CustomInputProps {
  className?: string;
  id: string;
  placeholder?: string;
  type: string;
  label: string;
  value?: string;
  onChange: (id: string, value: string) => void;
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
      <div className={classNames(styles.component, className)}>
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
        <input
          className={styles.input}
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </div>
    );
  },
);
CustomInput.displayName = 'CustomInput';
