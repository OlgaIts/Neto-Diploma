import { memo, useEffect, useState } from 'react';
import classNames from 'classnames';
import { RangeSlider } from '@shared/ui/RangeSlider';
import styles from './TimeSlider.module.scss';

interface TimeSliderProps {
  className?: string;
  label?: string;
  func: (data: number[]) => void;
}

export const TimeSlider = memo(
  ({ className, label, func }: TimeSliderProps) => {
    const [range, setRange] = useState<[number, number]>([0, 24]);

    const formatTime = (value: number): string => {
      const hours = value < 10 ? `0${value}` : value;
      return `${hours}:00`;
    };

    const handleRangeChange = (newRange: [number, number]) => {
      setRange(newRange);
    };

    useEffect(() => {
      func?.(range);
    }, [range]);

    return (
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
          onChange={handleRangeChange}
          formatValue={(value) => formatTime(value)}
        />
      </div>
    );
  },
);

TimeSlider.displayName = 'TimeSlider';
