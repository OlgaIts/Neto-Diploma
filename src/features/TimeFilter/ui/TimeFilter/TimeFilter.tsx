import classNames from 'classnames';
import { memo, useEffect, useState } from 'react';
import styles from './TimeFilter.module.scss';
import { RangeSlider } from '@shared/ui/RangeSlider';

interface TimeFilterProps {
  className?: string;
  label?: string;
  func: (data: number[]) => void;
}
export const TimeFilter = memo(
  ({ className, label, func }: TimeFilterProps) => {
    const [range, setRange] = useState([0, 24]);
    // TODO: formatTime collback 21:00

    useEffect(() => {
      func?.(range);
    }, [range]);

    return (
      //TODO: задать label туда и обратно дабавить возможность добавить сюда просп
      <div className={classNames(styles.component, className)}>
        <label htmlFor="" className={styles.label}>
          {label}
        </label>
        <RangeSlider
          height="10px"
          min={0}
          max={24}
          step={1}
          value={range}
          className={styles.slider}
          onChange={setRange}
        />
      </div>
    );
  },
);

TimeFilter.displayName = 'TimeFilter';
