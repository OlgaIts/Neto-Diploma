import { memo, useCallback } from 'react';
import { TimeSlider } from '@shared/ui/TimeSlider';
import { setRouteFilters } from '@entities/routes';
import { useAppDispatch } from '@shared/lib/hooks';
import { RouteDirection, TimeRange } from '@features/RouteTimeFilter';
import styles from './RoundTripTime.module.scss';

const excludeValues = [0, 24];
interface RoundTripTimeProps {
  routeDirection: RouteDirection;
}

export const RoundTripTime = memo(({ routeDirection }: RoundTripTimeProps) => {
  const dispatch = useAppDispatch();

  const getRoutes = useCallback(
    (timeRange: TimeRange) => (range: number[]) => {
      const timeFilter = {
        [timeRange.start]: !excludeValues.includes(range[0]) && range[0],
        [timeRange.end]: !excludeValues.includes(range[1]) && range[1],
      };

      dispatch(setRouteFilters(timeFilter));
    },
    [dispatch],
  );

  return (
    <div className={styles.component}>
      <TimeSlider func={getRoutes(routeDirection.from)} label='Время отбытия' />
      <TimeSlider
        func={getRoutes(routeDirection.to)}
        label='Время прибытия'
        className={styles.filter}
      />
    </div>
  );
});

RoundTripTime.displayName = 'RoundTripTime';
