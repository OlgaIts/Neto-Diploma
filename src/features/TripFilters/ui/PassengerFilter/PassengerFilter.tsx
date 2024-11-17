import { memo } from 'react';
import { Icon } from '@shared/ui/Icon';
import { Title } from '@shared/ui/Title';
import { useAppSelector } from '@shared/lib/hooks';
import { getAdultCount, getChildCount } from '@entities/seats';
import { type Direction } from '@shared/types';
import styles from './PassengerFilter.module.scss';

interface PassengerFilterProps {
  direction: Direction;
}

export const PassengerFilter = memo(({ direction }: PassengerFilterProps) => {
  const adultCount = useAppSelector(getAdultCount(direction));
  const childCount = useAppSelector(getChildCount(direction));

  const getAdiltPlural = (adultCount: number) => {
    return adultCount === 1 ? 'Взрослый' : 'Взрослых';
  };

  const getChildPlural = (childCount: number) => {
    return childCount === 1 ? 'Ребёнок' : 'Ребёнка';
  };

  return (
    <>
      <div className={styles.title_wrapper}>
        <Icon iconName='icon-person' color='accent' fontSize='24px' />
        <Title color='light' weight='bold'>
          Пассажиры
        </Title>
      </div>

      <div className={styles.wrapper}>
        <p className={styles.text}>
          <span className={styles.count}>{adultCount}</span>
          <span>{getAdiltPlural(adultCount)}</span>
        </p>
        <div>
          <span className={styles.price}>3456</span>
          <Icon iconName='icon-ruble' color='primary' fontSize='18px' />
        </div>
      </div>
      {childCount !== 0 && (
        <div className={styles.wrapper}>
          <p className={styles.text}>
            <span className={styles.count}>{childCount}</span>
            <span>{getChildPlural(childCount)}</span>
          </p>
          <div>
            <span className={styles.price}>3456</span>
            <Icon iconName='icon-ruble' color='primary' fontSize='18px' />
          </div>
        </div>
      )}
    </>
  );
});
PassengerFilter.displayName = 'PassengerFilter';
