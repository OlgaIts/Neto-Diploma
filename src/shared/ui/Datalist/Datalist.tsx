import classNames from 'classnames';
import { ChangeEvent, ForwardedRef, forwardRef, memo } from 'react';
import styles from './Datalist.module.scss';
import { FieldValues } from 'react-hook-form';

export interface DatalistOption {
  value: string;
  id: string;
}

interface DatalistProps {
  className?: string;
  data: DatalistOption[];
  listId: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  
}

export const Datalist = memo(
  forwardRef(function Datalist<T extends FieldValues>(
    props: DatalistProps,
    ref: ForwardedRef<HTMLInputElement | null>,
  ) {
    const { onChange, listId, className, data, name } = props;
    // memo(
    //   ({ data, className, listId, inputId, onChange, ...props }: DatalistProps) => {
    return (
      <>
        <input
          onChange={onChange}
          className={classNames(styles.input, className)}
          list={listId}
          id={name}
          name={name}
          ref={ref}
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

{
  /* <form>
  <label for="my-browser">Выберите браузер из списка:</label>
  <input type="text" list="browsers" id="my-browser" name="my-browser">
  <datalist id="browsers">
    <option value="Chrome">
    <option value="Firefox">
    <option value="Yandex Browser">
    <option value="Opera">
    <option value="Safari">
    <option value="Microsoft Edge">
  </datalist>
<form></form> */
}
