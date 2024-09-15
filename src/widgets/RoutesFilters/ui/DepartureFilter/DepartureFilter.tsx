import classNames from 'classnames';
import { memo } from 'react';
import styles from './DepartureFilter.module.scss';

import { useState } from 'react';

interface DepartureFilterProps {
  className?: string;
}
export const DepartureFilter = memo(({ className }: DepartureFilterProps) => {
  return <div></div>;
});

DepartureFilter.displayName = 'DepartureFilter';

//  переназвать компонент  туда-обратно время RoundTripTime

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
