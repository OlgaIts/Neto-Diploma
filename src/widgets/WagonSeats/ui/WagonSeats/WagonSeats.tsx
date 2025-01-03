import { memo } from 'react';
import { SeatsTicketType } from '@features/SeatsTicketType';
import { ChangeTrain } from '@features/ChangeTrain';
import { SelectWagonType } from '@features/SelectWagonType';
import { ChooseWagonSeat } from '@features/ChooseWagonSeat';
import { getSeatsInfo, RouteInfo } from '@entities/seats';
import { Title } from '@shared/ui/Title';
import { useAppSelector } from '@shared/lib/hooks';
import { type Direction } from '@shared/types';
import styles from './WagonSeats.module.scss';

interface WagonSeatsProps {
  direction: Direction;
}

const WagonSeats = memo(({ direction }: WagonSeatsProps) => {
  const isDeparture = direction === 'departure';

  const seatsInfo = useAppSelector(getSeatsInfo(direction));
  if (!seatsInfo) {
    return null;
  }

  return (
    <section className={styles.component}>
      <ChangeTrain
        className={!isDeparture ? styles.change_train : ''}
        iconName={isDeparture ? 'icon-arrow-fat-right' : 'icon-arrow-fat-left'}
      />
      <RouteInfo direction={direction} />

      <article className={styles.article}>
        <SeatsTicketType direction={direction} />
      </article>

      <section className={styles.section}>
        <Title color='dark' weight='bold' className={styles.section_title}>
          Тип вагона
        </Title>
        <SelectWagonType direction={direction} />
      </section>

      <ChooseWagonSeat direction={direction} />
    </section>
  );
});
WagonSeats.displayName = 'WagonSeats';

export const ArrivalWagonSeats = () => {
  return <WagonSeats direction='arrival' />;
};

export const DepartureWagonSeats = () => {
  return <WagonSeats direction='departure' />;
};
