import { ChangeEvent, ForwardedRef, forwardRef, memo } from 'react';
import classNames from 'classnames';
import styles from './Switch.module.scss';

interface SwitchProps {
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  checked?: boolean;
}

export const Switch = memo(
  forwardRef(function Datalist(
    props: SwitchProps,
    ref: ForwardedRef<HTMLInputElement | null>,
  ) {
    const { onChange, className, name, checked } = props;
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e);
    };

    return (
      <label className={classNames(styles.label, className)}>
        <input
          type='checkbox'
          className={styles.input}
          onChange={handleChange}
          name={name}
          ref={ref}
          checked={checked}
        />
        <span className={styles.slider}></span>
      </label>
    );
  }),
);
Switch.displayName = 'Switch';
