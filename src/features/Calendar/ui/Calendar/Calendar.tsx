import { memo } from 'react';
import moment from 'moment/moment';
import 'moment/locale/ru';
import { Icon } from '@shared/ui/Icon';
import { CalendarDays } from '../CalendarDays/CalendarDays';
import styles from './Calendar.module.scss';

interface CalendarProps {
  className?: string;
}
export const Calendar = memo(({ className }: CalendarProps) => {
  window.moment = moment;
  moment.updateLocale('ru', { week: { dow: 1 } });
  const startDay = moment().startOf('month').startOf('week');

  return (
    <div className={styles.calendar}>
      <div className={styles.top}>
        <Icon
          iconName={'icon-triangle'}
          className={styles.arrow_prev}
          fontSize="14px"
        />
        <div className={styles.month}>{moment().format('MMMM')}</div>
        <Icon
          iconName={'icon-triangle'}
          className={styles.arrow_next}
          fontSize="14px"
        />
      </div>

      <CalendarDays startDay={startDay} />
    </div>
  );
});
Calendar.displayName = 'Calendar';
