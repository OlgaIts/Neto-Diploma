import { memo, useState } from 'react';
import { Title } from '@shared/ui/Title';
import { RangeSlider } from '@shared/ui/RangeSlider';
import styles from './RoutePriceFilter.module.scss';

export const RoutePriceFilter = memo(() => {
  const [range, setRange] = useState([0, 24]);

  return (
    <>
      <Title color='light' weight='regular' className={styles.title}>
        Стоимость
      </Title>
      <div className={styles.wrapper}>
        <span>от</span>
        <span>до</span>
      </div>
      <RangeSlider
        height={'19px'}
        max={24}
        min={0}
        onChange={setRange}
        step={1}
        value={range}
        className={styles.slider}
      />
    </>
  );
});
RoutePriceFilter.displayName = 'RoutePriceFilter';
