import { memo, useCallback } from 'react';
import { format } from 'date-fns';
import {
  getRouteDateEnd,
  getRouteDateStart,
  setRouteFilters,
} from '@entities/routes';
import { parseDate } from '@shared/lib/utils';
import { Title } from '@shared/ui/Title';
import { CustomDatePicker } from '@shared/ui/CustomDatePicker';
import { useAppDispatch, useAppSelector } from '@shared/lib/hooks';
import styles from './RouteDateFilter.module.scss';

export const RouteDateFilter = memo(() => {
  const dispatch = useAppDispatch();
  const dateStart = useAppSelector(getRouteDateStart);
  const dateEnd = useAppSelector(getRouteDateEnd);

  const onDateChange = useCallback(
    (filterKey: string) => (date: Date | null) => {
      if (date) {
        const formatDate = format(date, 'yyyy-MM-dd');
        localStorage.setItem(filterKey, formatDate);

        dispatch(setRouteFilters({ [filterKey]: formatDate }));
      }
    },
    [],
  );

  return (
    <>
      <Title color='light' weight='regular' className={styles.title}>
        Дата поездки
      </Title>
      <CustomDatePicker
        className={styles.date_picker}
        onChange={onDateChange('date_start')}
        selected={dateStart ? parseDate(dateStart) : null}
      />
      <Title color='light' weight='regular' className={styles.title}>
        Дата возвращения
      </Title>
      <CustomDatePicker
        className={styles.date_picker}
        onChange={onDateChange('date_end')}
        selected={dateEnd ? parseDate(dateEnd) : null}
      />
    </>
  );
});
RouteDateFilter.displayName = 'RouteDateFilter';
