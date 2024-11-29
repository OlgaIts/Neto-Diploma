import { memo } from 'react';
import { getPassengers } from '@features/PassengerForm';
import { getSeatCount } from '@entities/seats';
import { useAppSelector } from '@shared/lib/hooks';
import { Button } from '@shared/ui/Button';
import styles from './PaymentPageLink.module.scss';

export const PaymentPageLink = memo(() => {
  const departureSeatsCount = useAppSelector(getSeatCount('departure'));
  const arrivalSeatsCount = useAppSelector(getSeatCount('arrival'));
  const totalSeatsCount = Math.max(departureSeatsCount, arrivalSeatsCount);
  const passengers = useAppSelector(getPassengers);

  const isDisabled = Object.tsKeys(passengers).length !== totalSeatsCount;

  return (
    <Button
      disabled={isDisabled}
      className={styles.btn}
      color='white'
      tag='Link'
      bgColor='primary'
      uppercase
      size='s'
      to='/payment'
      onClick={() => scroll(0, 0)}
    >
      Далее
    </Button>
  );
});

PaymentPageLink.displayName = 'PaymentPageLink';
