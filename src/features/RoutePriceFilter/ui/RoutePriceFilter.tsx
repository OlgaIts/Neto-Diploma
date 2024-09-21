import { memo, useEffect, useState } from 'react';
import { Title } from '@shared/ui/Title';
import { RangeSlider } from '@shared/ui/RangeSlider';
import { useAppDispatch } from '@shared/lib/hooks/useReduxHooks';
import { setRouteFilters } from '@entities/routes';
import styles from './RoutePriceFilter.module.scss';

export const RoutePriceFilter = memo(() => {
  const [range, setRange] = useState([0, 7000]);
  const dispatch = useAppDispatch();

  const getRoutes = (priceRange: number[]) => {
    const priceFilter = {
      price_from: priceRange[0],
      price_to: priceRange[1],
    };
    dispatch(setRouteFilters(priceFilter));
  };

  useEffect(() => {
    getRoutes(range);
  }, [range]);

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
        max={7000}
        min={0}
        onChange={setRange}
        step={100}
        value={range}
        className={styles.slider}
      />
    </>
  );
});

RoutePriceFilter.displayName = 'RoutePriceFilter';
