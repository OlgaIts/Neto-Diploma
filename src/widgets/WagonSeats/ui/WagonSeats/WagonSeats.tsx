import { memo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Title } from '@shared/ui/Title';
import { Icon } from '@shared/ui/Icon';
import { Button } from '@shared/ui/Button';
import { ServiceIcons } from '@shared/ui/ServiceIcons';
import { type WagonType, wagonType } from '@entities/routes';
import { useAppSelector } from '@shared/lib/hooks/useReduxHooks';
import { getDepartureSeats } from '@entities/seats';
import { SeatsTicketType } from '@features/SeatsTicketType';
import { TrainSchema } from '@shared/ui/TrainSchema';
import { RouteInfo } from '@entities/RouteInfo';
import styles from './WagonSeats.module.scss';

export const WagonSeats = memo(() => {
  const [wagonClass, setWagonClass] = useState<keyof WagonType>('fourth');
  const seats = useAppSelector(getDepartureSeats);

  return (
    <section className={styles.component}>
      <div className={styles.btn_wrapper}>
        <div className={styles.icon_wrapper}>
          <Icon
            iconName={'icon-arrow-fat-right'}
            color='white'
            fontSize='30px'
          />
        </div>
        <Button color='black' bgColor='light' tag='Link' to='/train' size='m'>
          Выбрать другой поезд
        </Button>
      </div>

      <RouteInfo />

      <article className={styles.article}>
        <SeatsTicketType />
      </article>

      <section className={styles.section}>
        <Title color='dark' weight='bold' className={styles.section_title}>
          Тип вагона
        </Title>

        <ul className={styles.seats_type_list}>
          {Object.tsKeys(wagonType).map((key) => (
            <li
              key={uuidv4()}
              className={styles.seats_item}
              onClick={() => setWagonClass(key)}
            >
              <Icon
                iconName={wagonType[key].iconName}
                fontSize='50px'
                color='grey'
              />
              <p className={styles.type}>{wagonType[key].label}</p>
            </li>
          ))}
        </ul>
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
        <TrainSchema wagonClass={wagonClass} />
      </div>
    </section>
  );
});
WagonSeats.displayName = 'WagonSeats';
