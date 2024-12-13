import { memo } from 'react';
import { getAdultCount, getChildCount, getTicketInfo } from '@entities/seats';
import { Icon } from '@shared/ui/Icon';
import { Title } from '@shared/ui/Title';
import { useAppSelector } from '@shared/lib/hooks';
import { toLocalString } from '@shared/lib/utils';
import { type Direction } from '@shared/types';
import styles from './PassengerFilter.module.scss';

interface PassengerFilterProps {
  direction: Direction;
}

export const PassengerFilter = memo(({ direction }: PassengerFilterProps) => {
  const adultCount = useAppSelector(getAdultCount(direction));
  const childCount = useAppSelector(getChildCount(direction));
  const ticketInfo = useAppSelector(getTicketInfo(direction));

  const getAdultPlural = (adultCount: number) => {
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

      {adultCount !== 0 && (
        <div className={styles.wrapper}>
          <p className={styles.text}>
            <span className={styles.count}>{adultCount}</span>
            <span>{getAdultPlural(adultCount)}</span>
          </p>
          <div>
            <span className={styles.price}>
              {toLocalString(ticketInfo.adultPrice)}
            </span>
            <Icon iconName='icon-ruble' color='primary' fontSize='18px' />
          </div>
        </div>
      )}

      {childCount !== 0 && (
        <div className={styles.wrapper}>
          <p className={styles.text}>
            <span className={styles.count}>{childCount}</span>
            <span>{getChildPlural(childCount)}</span>
          </p>
          <div>
            <span className={styles.price}>
              {toLocalString(ticketInfo.childPrice)}
            </span>
            <Icon iconName='icon-ruble' color='primary' fontSize='18px' />
          </div>
        </div>
      )}
    </>
  );
});
PassengerFilter.displayName = 'PassengerFilter';
