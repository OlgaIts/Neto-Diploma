import { ForwardRefRenderFunction, forwardRef, memo } from 'react';
import classNames from 'classnames';
import DatePicker from 'react-datepicker';
import { Icon } from '../Icon';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './CustomDatePicker.module.scss';

interface CustomDatePickerProps {
  className?: string;
  selected?: Date | null;
  onChange?: (date: Date | null) => void;
}

interface CustomInputProps {
  value: string;
  onClick: () => void;
  className?: string;
}

const CustomInput: ForwardRefRenderFunction<
  HTMLDivElement,
  CustomInputProps
> = ({ value, onClick, className }, ref) => (
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
    <Icon
      iconName={'icon-calendar'}
      color='primary'
      fontSize='22px'
      className={styles.icon}
    />
  </div>
);

const ForwardedCustomInput = forwardRef(CustomInput);

export const CustomDatePicker = memo(
  ({ className, selected, onChange }: CustomDatePickerProps) => {
    return (
      <DatePicker
        locale='ru'
        customInput={<ForwardedCustomInput value='' onClick={() => {}} />}
        calendarStartDay={1}
        selected={selected}
        onChange={onChange}
        dateFormat='dd.MM.yyyy'
        className={classNames(styles.datepicker, className)}
      />
    );
  },
);
CustomDatePicker.displayName = 'CustomDatePicker';
