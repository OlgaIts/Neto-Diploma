import { memo, useRef, useState } from 'react';
import classNames from 'classnames';
import { useClickOutside } from '@shared/lib/hooks/useClickOutside';
import styles from './SeatsTicketTypeInput.module.scss';

interface SeatsTicketTypeInputProps {
  label: string;
}

export const SeatsTicketTypeInput = memo(
  ({ label }: SeatsTicketTypeInputProps) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const dropdownRef = useRef(null);

    const handleSelect = (item: string) => {
      setValue(item);
      setOpen(false);
    };

    useClickOutside({
      ref: dropdownRef,
      handleClickOutside: () => setOpen(false),
    });

    return (
      <div ref={dropdownRef} className={styles.component}>
        <input
          className={classNames(styles.input, open ? styles.inputOpen : '')}
          type='text'
          placeholder={label}
          value={value}
          onClick={() => setOpen(!open)}
          readOnly
        />
        {open && (
          <ul className={classNames(styles.list, open ? styles.listOpen : '')}>
            {[...Array(5)].map((_, index) => (
              <li
                className={styles.item}
                key={index}
                onClick={() => handleSelect(`${label} - ${index + 1}`)}
              >
                <span>{index + 1}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  },
);
SeatsTicketTypeInput.displayName = 'SeatsTicketTypeInput';
