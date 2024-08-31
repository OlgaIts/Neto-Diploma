import classNames from 'classnames';
import { ChangeEvent, ForwardedRef, forwardRef, memo } from 'react';
import { FieldValues } from 'react-hook-form';
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
  value: string
}

export const Datalist = memo(
  forwardRef(function Datalist<T extends FieldValues>(
    props: DatalistProps,
    ref: ForwardedRef<HTMLInputElement | null>,
  ) {
    const { onChange, listId, className, data, name, placeholder, value } = props;
    const handleChange = (e: any) => {
      onChange(e);
    };

    return (
      <>
        <input
          onChange={handleChange}
          className={classNames(styles.input, className)}
          list={listId}
          id={name}
          name={name}
          ref={ref}
          placeholder={placeholder}
          value={value}
        />
        <datalist id={listId}>
          {data.map((item) => (
            <option value={item.value} key={item.id} />
          ))}
        </datalist>
      </>
    );
  }),
);
Datalist.displayName = 'Datalist';
