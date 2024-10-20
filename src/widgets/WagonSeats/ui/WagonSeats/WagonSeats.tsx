import { memo } from 'react';
import { Title } from '@shared/ui/Title';
import { RouteInfo } from '@entities/seats';
import { SeatsTicketType } from '@features/SeatsTicketType';
import { ChangeTrain } from '@features/ChangeTrain';
import { SelectWagonType } from '@features/SelectWagonType';
import { ChooseWagonSeat } from '@features/ChooseWagonSeat';
import { type Direction } from '@shared/types';
import styles from './WagonSeats.module.scss';

interface WagonSeatsProps {
  direction: Direction;
}

const WagonSeats = memo(({ direction }: WagonSeatsProps) => {
  const isDeparture = direction === 'departure';

  return (
    <section className={styles.component}>
      <ChangeTrain
        className={!isDeparture && styles.change_train}
        iconName={isDeparture ? 'icon-arrow-fat-right' : 'icon-arrow-fat-left'}
      />
      <RouteInfo direction={direction} />

      <article className={styles.article}>
        <SeatsTicketType />
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
