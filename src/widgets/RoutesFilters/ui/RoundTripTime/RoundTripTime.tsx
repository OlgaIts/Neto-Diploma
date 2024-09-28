import { memo, useCallback } from 'react';
import { TimeSlider } from '@shared/ui/TimeSlider';
import { setRouteFilters } from '@entities/routes';
import { useAppDispatch } from '@shared/lib/hooks/useReduxHooks';
import { RouteDirection, TimeRange } from '@features/RouteTimeFilter';
import styles from './RoundTripTime.module.scss';

interface RoundTripTimeProps {
  routeDirection: RouteDirection;
}

export const RoundTripTime = memo(({ routeDirection }: RoundTripTimeProps) => {
  const dispatch = useAppDispatch();

  const getRoutes = useCallback(
    (timeRange: TimeRange) => (range: number[]) => {
      const timeFilter = {
        [timeRange.start]: range[0],
        [timeRange.end]: range[1],
      };
      dispatch(setRouteFilters(timeFilter));
    },
    [],
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
