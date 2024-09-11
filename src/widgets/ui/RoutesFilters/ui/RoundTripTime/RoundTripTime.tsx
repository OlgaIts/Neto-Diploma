import { memo, useState } from 'react';
import classNames from 'classnames';
import { TimeFilter } from '@features/TimeFilter';
import { useAppSelector } from '@shared/lib/hooks/useReduxHooks';
import { getTicketFormData } from '@features/TicketForm';
import { services } from '@entities/routes/model/services/services';
import styles from './RoundTripTime.module.scss';

interface RoundTripTimeProps {
  className?: string;
}
export const RoundTripTime = memo(({ className }: RoundTripTimeProps) => {
  const [start_departure_hour_from, start_departure_hour_to] = useState();
  const [start_arrival_hour_from, start_arrival_hour_to] = useState();

  const ticketFormData = useAppSelector(getTicketFormData);

  const getRoutes = (range: number[]) => {
    const startRangeTime = range[0];
    const endRangeTime = range[1];
    if (ticketFormData.from && ticketFormData.to) {
      services.getRoutes({
        from_city_id: ticketFormData.from.id,
        to_city_id: ticketFormData.to.id,
        date_start: ticketFormData.departureDate.split('T')[0],
        date_end: ticketFormData.returnDate.split('T')[0],
        start_departure_hour_from: startRangeTime,
        end_departure_hour_from: endRangeTime,
      });
    }
  };
  console.log(ticketFormData);

  return (
    <div className={styles.component}>
      <TimeFilter func={getRoutes} label="Время отбытия" />
      <TimeFilter
        func={getRoutes}
        label="Время прибытия"
        className={styles.filter}
      />
    </div>
  );
});
RoundTripTime.displayName = 'RoundTripTime';

//TODO: 2 тайм фильтра один start_departure_hour_from и start_departure_hour_to [0]
// второй start_departure_hour_to и start_arrival_hour_to [1]
// будет 2 состояния первое хранит start_departure_hour_from
// [start_departure_hour_from, start_departure_hour_to] = useState
// [start_arrival_hour_from, start_arrival_hour_to] = useState

// перетащить функцию  const getRoutes = (range: number[]) => { из RoutesFilters
// переделать на замыкание чтобы прокидывать туда ключи start_arrival_hour_from...
// будут вызываться 2 таймфильтра прокидывать туда запкнутый getRoutes

// start_departure_hour_from - Час отбытия от (число)
// start_arrival_hour_from - Час прибытия от (число)
// start_departure_hour_to - Час отбытия до (число)
// start_arrival_hour_to - Час прибытия до (число)

// end_departure_hour_from - Час отбытия назад от (число)
// end_departure_hour_to - Час отбытия назад до (число)
// end_arrival_hour_from - Час прибытия назад от (работает при установленном параметре date_end)
// end_arrival_hour_to - Час прибытия назад до (работает при установленном параметре date_end)
