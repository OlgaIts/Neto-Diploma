import { memo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import styles from './DropdownButton.module.scss';
import { Icon } from '../Icon';

interface DropdownButtonProps {
  className?: string;
  label?: string;
  id?: string;
  list: string[];
}
export const DropdownButton = memo(
  ({ className, label, id, list }: DropdownButtonProps) => {
    const [openModal, setOpenModal] = useState(false);
    const [value, setValue] = useState(list[0]);

    const handleSelect = (index: number) => {
      setValue(list[index]);
      setOpenModal(false);
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
