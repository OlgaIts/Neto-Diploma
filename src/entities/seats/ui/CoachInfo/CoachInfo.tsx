import { memo } from 'react';
import { Icon } from '@shared/ui/Icon';
import { addZero } from '@shared/lib/helpers/addZero';
import { type Direction } from '@shared/types';
import { ServiceIcons } from '../ServiceIcons/ServiceIcons';
import { useAppSelector } from '@shared/lib/hooks/useReduxHooks';
import { getCurrentWagonInfo } from '@entities/seats/model/selectors/currentWagonInfoSelector';
import styles from './CoachInfo.module.scss';

interface CoachInfoProps {
  direction: Direction;
}

export const CoachInfo = memo(({ direction }: CoachInfoProps) => {
  const currentInfo = useAppSelector(getCurrentWagonInfo(direction));

  return (
    <>
      <div className={styles.number_wrapper}>
        <div className={styles.number}>{addZero(currentInfo?.wagonNumber)}</div>
        <p>вагон</p>
      </div>
      <div className={styles.wrapper}>
        <p className={styles.subtitle}>
          Места <span>{currentInfo?.available_seats}</span>
        </p>
        {currentInfo?.top !== 0 && (
          <p className={styles.coach_type}>
            Верхние <span>{currentInfo?.top}</span>
          </p>
        )}
        {currentInfo?.bottom !== 0 && (
          <p className={styles.coach_type}>
            Нижние <span>{currentInfo?.bottom}</span>
          </p>
        )}
        {currentInfo?.side !== 0 && (
          <p className={styles.coach_type}>
            Боковые <span>{currentInfo?.side}</span>
          </p>
        )}
      </div>

      <div className={styles.wrapper}>
        <p className={styles.subtitle}>Стоимость</p>

        {currentInfo?.top !== 0 && (
          <p className={styles.coach_price}>
            {Number(currentInfo?.top_price).toLocaleString('ru-RU')}
            <Icon iconName={'icon-ruble'} color='dark_gray' fontSize='18px' />
          </p>
        )}
        {currentInfo?.bottom !== 0 && (
          <p className={styles.coach_price}>
            {Number(currentInfo?.bottom_price).toLocaleString('ru-RU')}
            <Icon iconName={'icon-ruble'} color='dark_gray' fontSize='18px' />
          </p>
        )}

        {currentInfo?.side !== 0 && (
          <p className={styles.coach_price}>
            {Number(currentInfo?.side_price).toLocaleString('ru-RU')}
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
