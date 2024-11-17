import { ChangeEvent, memo } from 'react';
import classNames from 'classnames';
import { Icon } from '../Icon';
import styles from './RadioGroup.module.scss';
import { IconName } from '../Icon/Icon';

interface RadioGroupProps {
  className?: string;
  name: string;
  title: string;
  value: string;
  iconName?: IconName;
  options: { value: string; id: string; disabled?: boolean }[];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  clearFunction?: (name: string) => void;
}
export const RadioGroup = memo(
  ({
    className,
    onChange,
    name,
    options,
    title,
    value,
    iconName,
    clearFunction,
  }: RadioGroupProps) => {
    return (
      <fieldset className={classNames(className, styles.fieldset)}>
        <legend className={styles.legend}>
          {iconName && <Icon iconName={iconName} fontSize='28px' />}
          <span className={styles.title}>{title}</span>
        </legend>
        {options.map(({ value: optionValue, id, disabled }) => (
          <label htmlFor={id} className={styles.label} key={id}>
            <input
              type='radio'
              name={name}
              id={id}
              onChange={onChange}
              value={optionValue}
              checked={optionValue === value}
              disabled={disabled}
              className={styles.input}
            />
            <span
              className={classNames(styles.value, {
                [styles.disabled]: disabled,
                [styles.active]: optionValue === value,
              })}
            >
              {optionValue}
            </span>
          </label>
        ))}
        <Icon
          iconName='icon-close'
          fontSize='14px'
          onClick={() => clearFunction?.(name)}
          color='accent'
          className={styles.icon_close}
        />
      </fieldset>
    );
  },
);
RadioGroup.displayName = 'RadioGroup';
