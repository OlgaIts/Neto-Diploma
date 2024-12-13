import { memo } from 'react';
import classNames from 'classnames';
import { TripDetailFilters } from '@features/TripFilters';
import { TotalFilter } from '@features/TripFilters/ui/TotalFilter/TotalFilter';
import { getSeatCount, getTotalTicketPrice } from '@entities/seats';
import { useAppSelector } from '@shared/lib/hooks';
import { Title } from '@shared/ui/Title';
import styles from './TripDetails.module.scss';

interface TripDetailsProps {
  className?: string;
}
export const TripDetails = memo(({ className }: TripDetailsProps) => {
  const arrivalSeatsCount = useAppSelector(getSeatCount('arrival'));
  const totalDeparturePrice = useAppSelector(getTotalTicketPrice('departure'));
  const totalArrivalPrice = useAppSelector(getTotalTicketPrice('arrival'));
  const totalPrice = totalDeparturePrice + totalArrivalPrice;

  return (
    <section className={classNames(styles.component, className)}>
      <Title weight='medium' color='light' uppercase className={styles.title}>
        Детали поездки
      </Title>

      <article className={styles.article}>
        <TripDetailFilters
          title='Туда'
          iconName='icon-arrow-fat-right'
          direction='departure'
        />
      </article>

      {arrivalSeatsCount !== 0 && (
        <article className={styles.article}>
          <TripDetailFilters
            title='Обратно'
            iconName='icon-arrow-fat-left'
            direction='arrival'
          />
        </article>
      )}

      <article>
        <TotalFilter totalPrice={totalPrice} />
      </article>
    </section>
  );
});
TripDetails.displayName = 'TripDetails';
