import { memo } from 'react';
import { getArrivalInfo, getSeatCount, getSeatsLimit } from '@entities/seats';
import { Button } from '@shared/ui/Button';
import { useAppSelector } from '@shared/lib/hooks';
import styles from './PassengerPageLink.module.scss';

export const PassengerPageLink = memo(() => {
  const departureSeatLimit = useAppSelector(getSeatsLimit('departure'));
  const departureSeatsCount = useAppSelector(getSeatCount('departure'));
  const arrivalSeatLimit = useAppSelector(getSeatsLimit('arrival'));
  const arrivalSeatsCount = useAppSelector(getSeatCount('arrival'));
  const arrivalInfo = useAppSelector(getArrivalInfo);

  const isDisabled =
    departureSeatLimit !== departureSeatsCount ||
    (arrivalInfo !== null && arrivalSeatLimit !== arrivalSeatsCount);

  return (
    <Button
      disabled={isDisabled}
      tag='Link'
      to='/passenger'
      size='s'
      uppercase
      color='white'
      className={styles.btn}
    >
      Далее
    </Button>
  );
});
PassengerPageLink.displayName = 'PassengerPageLink';
