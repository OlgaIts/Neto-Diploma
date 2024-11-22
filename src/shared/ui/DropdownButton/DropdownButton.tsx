import { memo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import { Icon } from '../Icon';
import styles from './DropdownButton.module.scss';

interface DropdownButtonProps {
  className?: string;
  label?: string;
  id?: string;
  list: string[];
  onSelect?: (value: string) => void;
  onChange?: (value: string) => void;
}
export const DropdownButton = memo(
  ({ className, label, id, list, onSelect, onChange }: DropdownButtonProps) => {
    const [openModal, setOpenModal] = useState(false);
    const [value, setValue] = useState(list[0]);

    const handleSelect = (index: number) => {
      const selectedValue = list[index];
      setValue(selectedValue);
      setOpenModal(false);
      if (onSelect) {
        onSelect(selectedValue);
      }
      if (onChange) {
        onChange(selectedValue);
      }
    };

    return (
      <div className={classNames(styles.component, className)}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <input
          className={classNames(
            styles.input,
            openModal ? styles.inputOpen : '',
          )}
          type='text'
          id={id}
          onClick={() => setOpenModal(!openModal)}
          readOnly
          value={value}
          onChange={() => onChange && onChange(value)}
        />
        <Icon
          className={classNames(styles.icon, openModal ? styles.icon_open : '')}
          iconName={'icon-triangle'}
          color='dark_gray'
          fontSize='14px'
          onClick={() => setOpenModal(!openModal)}
        />
        {openModal && (
          <ul
            className={classNames(
              styles.list,
              openModal ? styles.listOpen : '',
            )}
          >
            {list.map((item, index) => (
              <li
                key={uuidv4()}
                className={styles.item}
                onClick={() => handleSelect(index)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  },
);
DropdownButton.displayName = 'DropdownButton';
