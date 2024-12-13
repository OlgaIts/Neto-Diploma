import { ForwardRefRenderFunction, forwardRef, memo, useCallback } from 'react';
import classNames from 'classnames';
import DatePicker from 'react-datepicker';
import { Icon } from '../Icon';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './CustomDatePicker.module.scss';

interface CustomDatePickerProps {
  className?: string;
  selected?: Date | null;
  onChange?: (date: Date | null) => void;
  localStorageKey?: string;
}

interface CustomInputProps {
  className?: string;
  value: string;
  onClick: () => void;
  onClear?: () => void;
}

const CustomInput: ForwardRefRenderFunction<
  HTMLDivElement,
  CustomInputProps
> = ({ value, onClick, className, onClear }, ref) => (
  <div
    className={classNames('custom-input-container', className)}
    onClick={onClick}
    ref={ref}
  >
    <input
      className={styles.input}
      value={value}
      placeholder='ДД/ММ/ГГ'
      readOnly
    />
    {value ? (
      <Icon
        iconName='icon-close'
        color='dark_gray'
        fontSize='18px'
        className={classNames(styles.icon, styles.icon_close)}
        onClick={onClear}
      />
    ) : (
      <Icon
        iconName={'icon-calendar'}
        color='primary'
        fontSize='22px'
        className={styles.icon}
      />
    )}
  </div>
);

const ForwardedCustomInput = forwardRef(CustomInput);

export const CustomDatePicker = memo(
  ({
    className,
    selected,
    onChange,
    localStorageKey,
  }: CustomDatePickerProps) => {
    const clearValue = useCallback(() => {
      if (onChange) {
        onChange(null);
      }
      localStorageKey && localStorage.removeItem(localStorageKey);
    }, [localStorageKey]);

    return (
      <DatePicker
        locale='ru'
        customInput={
          <ForwardedCustomInput
            value=''
            onClick={() => {}}
            onClear={clearValue}
          />
        }
        calendarStartDay={1}
        selected={selected}
        onChange={onChange}
        dateFormat='dd.MM.yyyy'
        className={className}
      />
    );
  },
);
CustomDatePicker.displayName = 'CustomDatePicker';
