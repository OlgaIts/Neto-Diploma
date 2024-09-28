import { memo } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { Title } from '@shared/ui/Title';
import { Icon } from '@shared/ui/Icon';
import { Button } from '@shared/ui/Button';
import { ServiceIcons } from '@shared/ui/ServiceIcons';
import { wagonType } from '@entities/routes';
import { useAppSelector } from '@shared/lib/hooks/useReduxHooks';
import { getDepartureSeats } from '@entities/seats';
import styles from './WagonSeats.module.scss';

export const WagonSeats = memo(() => {
  const seats = useAppSelector(getDepartureSeats);
  console.log(seats);

  return (
    <section className={styles.component}>
      <article className={styles.article}>
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

        <div className={styles.route_wrapper}>
          <div className={classNames(styles.box, styles.train_wrapper)}>
            <div className={styles.icon_train_wrapper}>
              <Icon iconName={'icon-train'} color='accent' fontSize='16px' />
            </div>
            <div className={styles.route}>
              <p className={styles.train_name}>12345</p>
              <p>
                Moskau
                <span>
                  <Icon iconName={'icon-arrow-thin'} color='dark' />
                </span>
              </p>
              <p>SPB</p>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.citys}>
              <div>
                <p className={styles.time}>9:42</p>
                <p className={styles.city_name}>Moskau</p>
                <p className={styles.station}>вокзал</p>
              </div>
              <Icon
                iconName={'icon-arrow-fat-right'}
                color='accent'
                fontSize='30px'
              />
              <div>
                <p className={styles.time}>9:42</p>
                <p className={styles.city_name}>Moskau</p>
                <p className={styles.station}>вокзал</p>
              </div>
            </div>
          </div>

          <div className={styles.time_wrapper}>
            <Icon iconName={'icon-clock'} fontSize='30px' color='accent' />
            <div>
              <p>9 Uhr</p>
              <p>30 MIn</p>
            </div>
          </div>
        </div>
      </article>

      <article className={styles.article}>
        <Title color='dark' weight='bold'>
          Количество билетов
        </Title>
        <form className={styles.form}>
          <input type='text' className={styles.input} />
          <input type='text' className={styles.input} />
          <input type='text' className={styles.input} />
        </form>
      </article>

      <section className={styles.section}>
        <Title color='dark' weight='bold' className={styles.section_title}>
          Тип вагона
        </Title>

        <ul className={styles.seats_type_list}>
          {Object.tsKeys(wagonType).map((key) => (
            <li key={uuidv4()} className={styles.seats_item}>
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
    </section>
  );
});
WagonSeats.displayName = 'WagonSeats';
