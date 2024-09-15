import { memo, useCallback } from 'react';
import { TimeSlider } from '@shared/ui/TimeSlider';
import { getTicketFormData } from '@features/TicketForm';
import { setRouteFilters } from '@entities/routes';
import {
  useAppDispatch,
  useAppSelector,
} from '@shared/lib/hooks/useReduxHooks';
import {
  RouteDirection,
  TimeRange,
} from '@features/RouteTimeFilter/consts/timeFiltersQueryParams';
import styles from './RoundTripTime.module.scss';

interface RoundTripTimeProps {
  routeDirection: RouteDirection;
}

export const RoundTripTime = memo(({ routeDirection }: RoundTripTimeProps) => {
  // const ticketFormData = useAppSelector(getTicketFormData);
  const dispatch = useAppDispatch();

  const getRoutes = useCallback(
    (timeRange: TimeRange) => (range: number[]) => {
      const timeFilter = {
        [timeRange.start]: range[0],
        [timeRange.end]: range[1],
      };

      dispatch(setRouteFilters(timeFilter));

      // const startRangeTime = range[0];
      // const endRangeTime = range[1];
      // if (ticketFormData.from && ticketFormData.to) {
      //   services.getRoutes({
      //     from_city_id: ticketFormData.from.id,
      //     to_city_id: ticketFormData.to.id,
      //     date_start: ticketFormData.departureDate.split('T')[0],
      //     date_end: ticketFormData.returnDate.split('T')[0],
      //     start_departure_hour_from: startRangeTime,
      //     end_departure_hour_from: endRangeTime,
      //   });
      // }
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
