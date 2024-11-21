import { ChangeEvent, ForwardedRef, forwardRef, memo, useState } from 'react';
import classNames from 'classnames';
import { Icon } from '../Icon';
import styles from './Datalist.module.scss';

export interface DatalistOption {
  value: string;
  id: string;
}

export interface DatalistProps {
  className?: string;
  data: DatalistOption[];
  listId: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value: string;
}

export const Datalist = memo(
  forwardRef(function Datalist(
    props: DatalistProps,
    ref: ForwardedRef<HTMLInputElement | null>,
  ) {
    const { onChange, listId, className, data, name, placeholder, value } =
      props;
    const [isOpen, setIsOpen] = useState(false);

    const handleFocus = () => setIsOpen(true);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e);
    };

    const handleSelect = (itemValue: string) => {
      const event = {
        target: {
          value: itemValue,
        },
      } as ChangeEvent<HTMLInputElement>;

      onChange(event);
      setIsOpen(false);
    };

    const clearValue = () => {
      const event = {
        target: {
          value: '',
        },
      } as ChangeEvent<HTMLInputElement>;

      onChange(event);
      setIsOpen(false);
    };

    return (
      <div className={styles.component}>
        <input
          onFocus={handleFocus}
          onChange={handleChange}
          className={classNames(styles.input, className)}
          list={listId}
          id={name}
          name={name}
          ref={ref}
          placeholder={placeholder}
          value={value}
        />
        {value ? (
          <Icon
            iconName='icon-close'
            color='dark_gray'
            fontSize='18px'
            className={classNames(styles.icon, styles.icon_close)}
            onClick={clearValue}
          />
        ) : (
          <Icon
            iconName='icon-map'
            color='primary'
            fontSize='24px'
            className={styles.icon}
          />
        )}

        {isOpen && (
          <ul id={listId} className={styles.datalist}>
            {data.map((item) => (
              <li
                key={item.id}
                className={styles.item}
                onClick={() => handleSelect(item.value)}
              >
                {item.value}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }),
);

Datalist.displayName = 'Datalist';
