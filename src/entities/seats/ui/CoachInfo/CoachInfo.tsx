import { memo } from 'react';
import { Icon } from '@shared/ui/Icon';
import { ServiceIcons } from '@shared/ui/ServiceIcons';
import { type Direction } from '@shared/types';
import { useGetCoachInfo } from '../../hooks/useGetCoachInfo';
import styles from './CoachInfo.module.scss';

interface CoachInfoProps {
  direction: Direction;
}

export const CoachInfo = memo(({ direction }: CoachInfoProps) => {
  const { currentSeats, currentWagonSeats, wagonClass, wagonNumber } =
    useGetCoachInfo(direction);

  return (
    <>
      <div className={styles.number_wrapper}>
        <div className={styles.number}>
          {currentWagonSeats?.coach.coachNumber}
        </div>
        <p>вагон</p>
      </div>
      <div className={styles.wrapper}>
        <p className={styles.subtitle}>
          Места <span>{currentWagonSeats?.coach.available_seats}</span>
        </p>
        <p className={styles.coach_type}>
          Верхние <span>10</span>
        </p>
        <p className={styles.coach_type}>
          Нижние <span>10</span>
        </p>
        <p className={styles.coach_type}>
          Боковые <span>10</span>
        </p>
      </div>

      <div className={styles.wrapper}>
        <p className={styles.subtitle}>Стоимость</p>
        <p className={styles.coach_price}>
          {Number(currentWagonSeats?.coach.top_price).toLocaleString('ru-RU')}
          <Icon iconName={'icon-ruble'} color='dark_gray' fontSize='18px' />
        </p>
        <p className={styles.coach_price}>
          {Number(currentWagonSeats?.coach.bottom_price).toLocaleString(
            'ru-RU',
          )}

          <Icon iconName={'icon-ruble'} color='dark_gray' fontSize='18px' />
        </p>
        <p className={styles.coach_price}>
          {Number(currentWagonSeats?.coach.side_price).toLocaleString('ru-RU')}
          <Icon iconName={'icon-ruble'} color='dark_gray' fontSize='18px' />
        </p>
      </div>
      <div className={styles.wrapper}>
        <p className={styles.service_title}>
          Обслуживание <span>фпк</span>
        </p>
        <ServiceIcons />
      </div>
    </>
  );
});
CoachInfo.displayName = 'CoachInfo';
