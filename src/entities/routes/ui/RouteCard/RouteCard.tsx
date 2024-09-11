import { memo } from 'react';
import classNames from 'classnames';
import moment from 'moment';
import 'moment/locale/ru';
import { Icon } from '@shared/ui/Icon';
import { WagonTypes } from '../WagonTypes/WagonTypes';
import { Route } from '@entities/routes/model/types/route';
import styles from './RouteCard.module.scss';
interface RouteCardProps {
  className?: string;
  item: Route;
}

export const RouteCard = memo(({ className, item }: RouteCardProps) => {
  //TODO: исправить время
  const formatDatetime = (time: number) => {
    return moment(time).locale('ru').format('HH:mm');
  };

  return (
    <div className={classNames(styles.component, className)}>
      <div className={styles.train_wrapper}>
        <div className={styles.icon_wrap}>
          <Icon iconName={'icon-train'} fontSize='54px' color='white' />
        </div>
        <span className={styles.train_name}>{item.departure.train.name}</span>
        <div className={styles.train_route}>
          <p>
            Адлер
            <Icon iconName={'icon-arrow-thin'} color='grey' />
          </p>
          <p>
            Москва
            <Icon iconName={'icon-arrow-thin'} color='dark' />
          </p>
          <p>Санкт-Петербург</p>
        </div>
      </div>

      <div className={styles.info}>
        <div className={styles.routes_wrap}>
          <div className={styles.route}>
            <div className={styles.route_direction}>
              <span className={styles.time}>
                {formatDatetime(item.departure.from.datetime)}
              </span>
              <span className={styles.city}>
                {item.departure.from.city.name}
              </span>
              <span className={styles.station}>
                {item.departure.from.railway_station_name} вокзал
              </span>
            </div>
            <div className={styles.trevel_time}>
              <span>{formatDatetime(item.departure.duration)}</span>
              <Icon
                iconName={'icon-arrow-fat-right'}
                color='accent'
                fontSize='30px'
              />
            </div>
            <div className={styles.route_direction}>
              <span className={styles.time}>
                {formatDatetime(item.departure.to.datetime)}
              </span>
              <span className={styles.city}>{item.departure.to.city.name}</span>
              <span className={styles.station}>
                {item.departure.to.railway_station_name} вокзал
              </span>
            </div>
          </div>
          {/* <div className={styles.route}>
            <div className={styles.route_direction}>
              <span className={styles.time}>00:10</span>
              <span className={styles.city}>Москва</span>
              <span className={styles.station}>Курский вокзал</span>
            </div>
            <div className={styles.trevel_time}>
              <span>9 : 42</span>
              <Icon
                iconName={'icon-arrow-fat-left'}
                color='accent'
                fontSize='30px'
              />
            </div>
            <div className={styles.route_direction}>
              <span className={styles.time}>09:52</span>
              <span className={styles.city}>Санкт-Петербург</span>
              <span className={styles.station}>Ладожский вокзал</span>
            </div>
          </div> */}
        </div>

        <WagonTypes item={item} />
      </div>
    </div>
  );
});
RouteCard.displayName = 'RouteCard';
