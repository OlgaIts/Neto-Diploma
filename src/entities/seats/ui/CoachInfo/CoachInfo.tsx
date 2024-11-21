import { memo } from 'react';
import { useAppSelector } from '@shared/lib/hooks';
import { addZero } from '@shared/lib/utils';
import { type Direction } from '@shared/types';
import { ServiceIcons } from '../ServiceIcons/ServiceIcons';
import { getCurrentWagonInfo } from '../../model/selectors/currentWagonInfoSelector';
import { CurrentSeatsInfo } from '../CurrentSeatsInfo/CurrentSeatsInfo';
import { CurrentPriceInfo } from '../CurrentPriceInfo/CurrentPriceInfo';
import styles from './CoachInfo.module.scss';

interface CoachInfoProps {
  direction: Direction;
}

export const CoachInfo = memo(({ direction }: CoachInfoProps) => {
  const currentInfo = useAppSelector(getCurrentWagonInfo(direction));
  const wagonClass = currentInfo?.wagonClass;

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
        <CurrentSeatsInfo currentInfo={currentInfo} wagonClass={wagonClass} />
      </div>

      <div className={styles.wrapper}>
        <p className={styles.subtitle}>Стоимость</p>
        <CurrentPriceInfo wagonClass={wagonClass} currentInfo={currentInfo} />
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
