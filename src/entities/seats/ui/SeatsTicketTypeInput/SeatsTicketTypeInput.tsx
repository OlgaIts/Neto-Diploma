import { memo, useRef, useState } from 'react';
import classNames from 'classnames';
import { useClickOutside } from '@shared/lib/hooks/useClickOutside';
import styles from './SeatsTicketTypeInput.module.scss';

interface SeatsTicketTypeInputProps {
  label: string;
  onSelect: (index: number) => void;
  value: string;
  text?: string;
}

export const SeatsTicketTypeInput = memo(
  ({ value, label, onSelect, text }: SeatsTicketTypeInputProps) => {
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const dropdownRef = useRef(null);

    const handleSelect = (index: number) => {
      setSelectedIndex(index);
      setOpen(false);
      onSelect(index);
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
                onClick={() => handleSelect(index)}
              >
                <span>{index + 1}</span>
              </li>
            ))}
          </ul>
        )}
        {selectedIndex !== null && <p className={styles.hint}>{text}</p>}
      </div>
    );
  },
);
SeatsTicketTypeInput.displayName = 'SeatsTicketTypeInput';
