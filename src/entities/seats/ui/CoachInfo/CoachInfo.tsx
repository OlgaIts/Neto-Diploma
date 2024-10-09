import { memo } from 'react';
import { Icon } from '@shared/ui/Icon';
import { addZero } from '@shared/lib/helpers/addZero';
import { type Direction } from '@shared/types';
import { useGetCoachInfo } from '../../hooks/useGetCoachInfo';
import { ServiceIcons } from '../ServiceIcons/ServiceIcons';
import styles from './CoachInfo.module.scss';

interface CoachInfoProps {
  direction: Direction;
}

export const CoachInfo = memo(({ direction }: CoachInfoProps) => {
  const { currentSeats, currentWagonSeats, wagonClass, wagonNumber } =
    useGetCoachInfo(direction);
  //TODO: переделать

  return (
    <>
      <div className={styles.number_wrapper}>
        <div className={styles.number}>
          {addZero(currentWagonSeats?.coach.coachNumber)}
        </div>
        <p>вагон</p>
      </div>
      <div className={styles.wrapper}>
        <p className={styles.subtitle}>
          Места <span>{currentWagonSeats?.coach.available_seats}</span>
        </p>
        {currentWagonSeats?.coach.seatsCount?.top !== 0 && (
          <p className={styles.coach_type}>
            Верхние <span>{currentWagonSeats?.coach.seatsCount?.top}</span>
          </p>
        )}
        {currentWagonSeats?.coach.seatsCount?.bottom !== 0 && (
          <p className={styles.coach_type}>
            Нижние <span>{currentWagonSeats?.coach.seatsCount?.bottom}</span>
          </p>
        )}
        {currentWagonSeats?.coach.seatsCount?.side !== 0 && (
          <p className={styles.coach_type}>
            Боковые <span>{currentWagonSeats?.coach.seatsCount?.side}</span>
          </p>
        )}
      </div>

      <div className={styles.wrapper}>
        <p className={styles.subtitle}>Стоимость</p>

        {currentWagonSeats?.coach.seatsCount?.top !== 0 && (
          <p className={styles.coach_price}>
            {Number(currentWagonSeats?.coach.top_price).toLocaleString('ru-RU')}
            <Icon iconName={'icon-ruble'} color='dark_gray' fontSize='18px' />
          </p>
        )}
        {currentWagonSeats?.coach.seatsCount?.bottom !== 0 && (
          <p className={styles.coach_price}>
            {Number(currentWagonSeats?.coach.bottom_price).toLocaleString(
              'ru-RU',
            )}
            <Icon iconName={'icon-ruble'} color='dark_gray' fontSize='18px' />
          </p>
        )}

        {currentWagonSeats?.coach.seatsCount?.side !== 0 && (
          <p className={styles.coach_price}>
            {Number(currentWagonSeats?.coach.side_price).toLocaleString(
              'ru-RU',
            )}
            <Icon iconName={'icon-ruble'} color='dark_gray' fontSize='18px' />
          </p>
        )}
      </div>
      <div className={styles.wrapper}>
        <p className={styles.service_title}>
          Обслуживание <span>фпк</span>
        </p>
        <ServiceIcons direction={direction} />
      </div>
    </>
  );
});
CoachInfo.displayName = 'CoachInfo';
