import classNames from 'classnames';
import { memo, useEffect, useState } from 'react';
import { RangeSlider } from '@shared/ui/RangeSlider';
import styles from './TimeSlider.module.scss';

interface TimeSliderProps {
  className?: string;
  label?: string;
  func: (data: number[]) => void;
}
export const TimeSlider = memo(
  ({ className, label, func }: TimeSliderProps) => {
    const [range, setRange] = useState([0, 24]);
    // TODO: formatTime collback 21:00

    useEffect(() => {
      func?.(range);
    }, [range]);

    return (
      //TODO: задать label туда и обратно дабавить возможность добавить сюда просп
      <div className={classNames(styles.component, className)}>
        <label htmlFor='' className={styles.label}>
          {label}
        </label>
        <RangeSlider
          height='10px'
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

TimeSlider.displayName = 'TimeSlider';
