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
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const dropdownRef = useRef(null);

    const handleSelect = (index: number) => {
      setValue(`${label} - ${index + 1}`);
      setSelectedIndex(index);
      setOpen(false);
    };

    useClickOutside({
      ref: dropdownRef,
      handleClickOutside: () => setOpen(false),
    });

    const getHintMessage = () => {
      if (selectedIndex === null) return '';

      if (label === 'Взрослых') {
        const passengers = 4 - selectedIndex;
        //TODO: придумать что-то другое за место 'Лимит исчерпан'
        if (passengers === 0) return 'Лимит исчерпан';
        const conjugation = passengers === 1 ? 'пассажира' : 'пассажиров';
        return `Можно добавить еще ${passengers} ${conjugation}`;
      }

      if (label === 'Детских') {
        const children = 4 - selectedIndex;
        if (children === 0) return 'Лимит исчерпан';
        const conjugation = children === 1 ? 'ребёнка' : 'детей';
        return `Можно добавить еще ${children} ${conjugation} до 10 лет. Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%.`;
      }

      return '';
    };

    //TODO: сделать слайс для инпутов
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
                // onClick={() => handleSelect(`${label} - ${index + 1}`)}
                onClick={() => handleSelect(index)}
              >
                <span>{index + 1}</span>
              </li>
            ))}
          </ul>
        )}
        {selectedIndex !== null && (
          <p className={styles.hint}>{getHintMessage()}</p>
        )}
      </div>
    );
  },
);
SeatsTicketTypeInput.displayName = 'SeatsTicketTypeInput';
