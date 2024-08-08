import { memo } from 'react';
import classNames from 'classnames';
import moment, { Moment } from 'moment/moment';
import styles from './CalendarDays.module.scss';

interface CalendarDaysProps {
  startDay: Moment;
}

export const CalendarDays = memo(({ startDay }: CalendarDaysProps) => {
  const day = startDay.clone().subtract(1, 'day');
  const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone());
  const currentDay = moment();
  const isCurrentMonth = (date: Moment) => currentDay.month() === date.month();
  const isCurrentDay = (date: Moment) => currentDay.isSame(date, 'day');

  return (
    <div className={styles.grid}>
      {daysArray.map((item) => (
        <div
          className={classNames(
            styles.cellWrapp,
            isCurrentDay(item) ? styles.active : '',
            !isCurrentMonth(item) ? styles.other : '',
          )}
          key={item.format('YYYY-MM-DD')}
        >
          {item.format('D')}
        </div>
      ))}
    </div>
  );
});

CalendarDays.displayName = 'CalendarDays';
