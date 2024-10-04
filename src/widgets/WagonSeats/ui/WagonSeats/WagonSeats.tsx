import { memo } from 'react';
import { Title } from '@shared/ui/Title';
import { Icon } from '@shared/ui/Icon';
import { ServiceIcons } from '@shared/ui/ServiceIcons';
import { useAppSelector } from '@shared/lib/hooks/useReduxHooks';
import { RouteInfo, getArrivalSeats, getDepartureSeats } from '@entities/seats';
import { SeatsTicketType } from '@features/SeatsTicketType';
import { TrainSchema } from '@shared/ui/TrainSchema';
import { ChangeTrain } from '@features/ChangeTrain';
import { SelectWagonType } from '@features/SelectWagonType';
import styles from './WagonSeats.module.scss';

interface WagonSeatsProps {
  direction: 'departure' | 'arrival';
}

export const WagonSeats = memo(({ direction }: WagonSeatsProps) => {
  const isDeparture = direction === 'departure';
  const getSeats = isDeparture ? getDepartureSeats : getArrivalSeats;
  const seats = useAppSelector(getSeats);

  // if (!seats) {
  //   return null;
  // }

  //TODO: вёрстка
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
        <SelectWagonType />
      </section>

      <div className={styles.wagons}>
        <div className={styles.wagon}>
          <p>Вагоны 10 12 15</p>
          <p>Нумерация вагонов начинается с головы поезда</p>
        </div>

        <div className={styles.seats_options}>
          <div className={styles.number_wrapper}>
            <div className={styles.number}>12</div>
            <p>вагон</p>
          </div>
          <div>
            <p>
              места <span>21</span>
            </p>
            <p>
              Верхние <span>10</span>
            </p>
            <p>
              Нижние <span>10</span>
            </p>
            <p>
              Боковые <span>10</span>
            </p>
          </div>
          <div>
            <p>Стоимость</p>
            <p>
              2 020
              <Icon iconName={'icon-ruble'} />
            </p>
            <p>
              3 020
              <Icon iconName={'icon-ruble'} />
            </p>
            <p>
              1 020
              <Icon iconName={'icon-ruble'} />
            </p>
          </div>
          <div>
            <p>
              Обслуживание <span>фпк</span>
            </p>
            <ServiceIcons />
          </div>
        </div>
      </div>
      <div className={styles.schema}>
        {/* <TrainSchema wagonClass={wagonClass} /> */}
      </div>
    </section>
  );
});
WagonSeats.displayName = 'WagonSeats';
