import { memo, useCallback } from 'react';
import { Title } from '@shared/ui/Title';
import { CustomDatePicker } from '@shared/ui/CustomDatePicker';
import { useAppDispatch, useAppSelector } from '@shared/lib/hooks';
import {
  getRouteDateEnd,
  getRouteDateStart,
  setRouteFilters,
} from '@entities/routes';
import styles from './RouteDateFilter.module.scss';

export const RouteDateFilter = memo(() => {
  const dispatch = useAppDispatch();
  const dateStart = useAppSelector(getRouteDateStart);
  const dateEnd = useAppSelector(getRouteDateEnd);

  const onDateChange = useCallback(
    (filterKey: string) => (date: Date | null) => {
      if (date) {
        dispatch(
          setRouteFilters({ [filterKey]: date.toISOString().split('T')[0] }),
        );
      }
    },
    [],
  );

  //TODO: переделать дату, чтобы в редаксе и в инпуте были одинаковые даты
  // Функция для преобразования строки в дату
  const parseDate = (dateString: string): Date | null => {
    return dateString ? new Date(dateString) : null;
  };

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
