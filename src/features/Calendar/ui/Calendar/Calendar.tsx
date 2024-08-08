import classNames from 'classnames';
import { memo } from 'react';
import moment from 'moment/moment';
import 'moment/locale/ru';
import { CalendarDays } from '../CalendarDays/CalendarDays';
import TriangleArrow from '../../../../shared/assets/svg/triangle.svg?react';
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
        <TriangleArrow className={styles.arrow_prev} />
        <div className={styles.month}>{moment().format('MMMM')}</div>
        <TriangleArrow className={styles.arrow_next} />
      </div>

      <CalendarDays startDay={startDay} />
    </div>
  );
});
Calendar.displayName = 'Calendar';
