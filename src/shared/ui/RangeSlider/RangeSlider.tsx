import {
  memo,
  useState,
  useEffect,
  useCallback,
  useMemo,
  type Dispatch,
  type SetStateAction,
} from 'react';
import classNames from 'classnames';
import styles from './RangeSlider.module.scss';
import useDebounce from '@shared/lib/hooks/useDebounce';

interface RangeSliderProps {
  className?: string;
  showTooltip?: boolean;
  max: number;
  min: number;
  onChange: Dispatch<SetStateAction<number[]>>;
  step: number;
  value: number[];
  height: string;
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
          type="range"
          name="min"
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
          type="range"
          name="max"
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
                {rangeValues.minValue}
              </div>
            </div>
            <div className={styles.wrapper} style={trackStyles.maxTooltip}>
              <div className={classNames(styles.max_tooltip, styles.tooltip)}>
                {rangeValues.maxValue}
              </div>
            </div>
          </>
        )}
      </div>
    );
  },
);
RangeSlider.displayName = 'RangeSlider';

// const [minValue, setMinValue] = useState(value[0]);
// const [maxValue, setMaxValue] = useState(value[1]);
// const [minTooltip, setMinTooltip] = useState(value[0]);
// const [maxTooltip, setMaxTooltip] = useState(value[1]);

// const trackRef = useRef<HTMLDivElement | null>(null);
// const minInputRef = useRef<HTMLInputElement | null>(null);
// const maxInputRef = useRef<HTMLInputElement | null>(null);
// const minTooltipRef = useRef<HTMLDivElement | null>(null);
// const maxTooltipRef = useRef<HTMLDivElement | null>(null);
// const zIndexMin = '10';
// const zIndexMax = '20';

// useEffect(() => {
//   if (
//     trackRef &&
//     trackRef.current &&
//     minTooltipRef &&
//     minTooltipRef.current &&
//     maxTooltipRef &&
//     maxTooltipRef.current
//   ) {
//     const minLeft = `${((minValue - min) / (max - min)) * 100}%`;
//     const maxRight = `${((max - maxValue) / (max - min)) * 100}%`;
//     trackRef.current.style.left = minLeft;
//     trackRef.current.style.right = maxRight;
//     minTooltipRef.current.style.left = minLeft;
//     minTooltipRef.current.style.transform = `translateX(-${minLeft})`;
//     maxTooltipRef.current.style.right = maxRight;
//     maxTooltipRef.current.style.transform = `translateX(${maxRight})`;
//   }
// }, [max, maxValue, min, minValue]);

// const handleChangeMin = (e: ChangeEvent<HTMLInputElement>) => {
//   if (
//     minInputRef &&
//     minInputRef.current &&
//     maxInputRef &&
//     maxInputRef.current
//   ) {
//     minInputRef.current.style.zIndex = zIndexMax;
//     maxInputRef.current.style.zIndex = zIndexMin;
//   }
//   if (
//     minTooltipRef &&
//     minTooltipRef.current &&
//     maxTooltipRef &&
//     maxTooltipRef.current
//   ) {
//     minTooltipRef.current.style.zIndex = zIndexMax;
//     maxTooltipRef.current.style.zIndex = zIndexMin;
//   }
//   const value = Number(e.target.value);
//   if (value <= maxValue) {
//     setMinValue(value);
//     setMinTooltip(value);
//     onChange?.([value, maxValue]);
//   }
// };

// const handleChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
//   if (
//     minInputRef &&
//     minInputRef.current &&
//     maxInputRef &&
//     maxInputRef.current
//   ) {
//     minInputRef.current.style.zIndex = zIndexMin;
//     maxInputRef.current.style.zIndex = zIndexMax;
//   }
//   if (
//     minTooltipRef &&
//     minTooltipRef.current &&
//     maxTooltipRef &&
//     maxTooltipRef.current
//   ) {
//     minTooltipRef.current.style.zIndex = zIndexMin;
//     maxTooltipRef.current.style.zIndex = zIndexMax;
//   }
//   const value = Number(e.target.value);
//   if (value >= minValue) {
//     setMaxValue(value);
//     setMaxTooltip(value);
//     onChange?.([minValue, value]);
//   }
// };

// return (
//   <div className={classNames(styles.component, className)} style={{height}}>
//     <div className={styles.track} ref={trackRef} />
//     <input
//       className={classNames(styles.input, styles.input_min)}
//       type='range'
//       name='min'
//       max={max}
//       min={min}
//       step={step}
//       onChange={handleChangeMin}
//       value={minValue}
//       ref={minInputRef}
//     />
//     <input
//       className={classNames(styles.input, styles.input_max)}
//       type='range'
//       name='max'
//       max={max}
//       min={min}
//       step={step}
//       onChange={handleChangeMax}
//       value={maxValue}
//       ref={maxInputRef}
//     />
//     {showTooltip && (
//       <>
//         <div className={styles.wrapper} ref={minTooltipRef}>
//           <div className={classNames(styles.min_tooltip, styles.tooltip)}>
//             {minTooltip}
//           </div>
//         </div>
//         <div className={styles.wrapper} ref={maxTooltipRef}>
//           <div className={classNames(styles.max_tooltip, styles.tooltip)}>
//             {maxTooltip}
//           </div>
//         </div>
//       </>
//     )}
//   </div>
// );
