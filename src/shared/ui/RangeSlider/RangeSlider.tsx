import { memo, useState, useEffect, useCallback, useMemo } from 'react';
import classNames from 'classnames';
import useDebounce from '@shared/lib/hooks/useDebounce';
import styles from './RangeSlider.module.scss';

interface RangeSliderProps {
  className?: string;
  showTooltip?: boolean;
  max: number;
  min: number;
  onChange: (value: [number, number]) => void;
  step: number;
  value: number[];
  height: string;
  formatValue?: (value: number) => string;
}

export const RangeSlider = memo(
  ({
    className,
    showTooltip = true,
    max,
    min,
    onChange,
    step,
    value,
    height,
    formatValue,
  }: RangeSliderProps) => {
    const [rangeValues, setRangeValues] = useState({
      minValue: value[0],
      maxValue: value[1],
    });

    const zIndexMin = '10';
    const zIndexMax = '20';

    useEffect(() => {
      setRangeValues({
        minValue: value[0],
        maxValue: value[1],
      });
    }, [value]);

    const trackStyles = useMemo(() => {
      const minLeft = `${((rangeValues.minValue - min) / (max - min)) * 100}%`;
      const maxRight = `${((max - rangeValues.maxValue) / (max - min)) * 100}%`;
      return {
        track: { left: minLeft, right: maxRight },
        minTooltip: { left: minLeft, transform: `translateX(-${minLeft})` },
        maxTooltip: { right: maxRight, transform: `translateX(${maxRight})` },
      };
    }, [rangeValues, min, max]);

    const debaunceHandleChange = useDebounce(onChange, 1500);

    const handleChange = useCallback(
      (type: 'min' | 'max') => (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (type === 'min' && value <= rangeValues.maxValue) {
          setRangeValues((prev) => ({ ...prev, minValue: value }));
          debaunceHandleChange?.([value, rangeValues.maxValue]);
        }
        if (type === 'max' && value >= rangeValues.minValue) {
          setRangeValues((prev) => ({ ...prev, maxValue: value }));
          debaunceHandleChange?.([rangeValues.minValue, value]);
        }
      },
      [rangeValues, debaunceHandleChange],
    );

    return (
      <div
        className={classNames(styles.component, className)}
        style={{ height }}
      >
        <div className={styles.track} style={trackStyles.track} />
        <input
          className={classNames(styles.input, styles.input_min)}
          type='range'
          name='min'
          max={max}
          min={min}
          step={step}
          onChange={handleChange('min')}
          value={rangeValues.minValue}
          style={{
            zIndex:
              rangeValues.minValue < rangeValues.maxValue
                ? zIndexMax
                : zIndexMin,
          }}
        />
        <input
          className={classNames(styles.input, styles.input_max)}
          type='range'
          name='max'
          max={max}
          min={min}
          step={step}
          onChange={handleChange('max')}
          value={rangeValues.maxValue}
          style={{
            zIndex:
              rangeValues.maxValue > rangeValues.minValue
                ? zIndexMax
                : zIndexMin,
          }}
        />
        {showTooltip && (
          <>
            <div className={styles.wrapper} style={trackStyles.minTooltip}>
              <div className={classNames(styles.min_tooltip, styles.tooltip)}>
                {/* {rangeValues.minValue} */}
                {formatValue
                  ? formatValue(rangeValues.minValue)
                  : rangeValues.minValue}
              </div>
            </div>
            <div className={styles.wrapper} style={trackStyles.maxTooltip}>
              <div className={classNames(styles.max_tooltip, styles.tooltip)}>
                {/* {rangeValues.maxValue} */}
                {formatValue
                  ? formatValue(rangeValues.maxValue)
                  : rangeValues.maxValue}
              </div>
            </div>
          </>
        )}
      </div>
    );
  },
);

RangeSlider.displayName = 'RangeSlider';
