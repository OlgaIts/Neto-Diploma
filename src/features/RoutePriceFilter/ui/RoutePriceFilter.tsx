import { memo } from 'react';
import { getRouteFilter, setRouteFilters } from '@entities/routes';
import { useAppDispatch, useAppSelector } from '@shared/lib/hooks';
import { Title } from '@shared/ui/Title';
import { RangeSlider } from '@shared/ui/RangeSlider';
import styles from './RoutePriceFilter.module.scss';

export const RoutePriceFilter = memo(() => {
  const dispatch = useAppDispatch();
  const { price_from, price_to } = useAppSelector(getRouteFilter);

  const getRoutes = (priceRange: number[]) => {
    const priceFilter = {
      price_from: priceRange[0],
      price_to: priceRange[1],
    };
    dispatch(setRouteFilters(priceFilter));
  };

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
        onChange={getRoutes}
        step={100}
        value={[price_from!, price_to!]}
        className={styles.slider}
      />
    </>
  );
});

RoutePriceFilter.displayName = 'RoutePriceFilter';
