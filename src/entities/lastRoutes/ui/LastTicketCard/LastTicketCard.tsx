import { memo } from 'react';
import classNames from 'classnames';
import { Icon } from '@shared/ui/Icon';
import { Route } from '@entities/routes';
import styles from './LastTicketCard.module.scss';

interface LastTicketCardProps {
  item: Route;
}

export const LastTicketCard = memo(({ item }: LastTicketCardProps) => {
  return (
    <li className={styles.card}>
      <div className={styles.box}>
        <div className={styles.station}>
          <div>{item.departure.from.city.name}</div>
          <span>{item.departure.from.railway_station_name} вокзал</span>
        </div>

        <div className={classNames(styles.station, styles.station_to)}>
          <div>{item.departure.to.city.name}</div>
          <span>{item.departure.to.railway_station_name} вокзал</span>
        </div>
      </div>

      <div className={styles.box}>
        <div className={styles.icon_wrapper}>
          <Icon iconName={'icon-wi-fi'} color="primary" fontSize="24px" />
          <Icon iconName={'icon-express'} color="primary" fontSize="24px" />
          <Icon iconName={'icon-caffee'} color="primary" fontSize="24px" />
        </div>

        <div className={styles.price_wrapper}>
          <span>от</span>
          <span className={styles.price}>
            {Number(item.min_price).toLocaleString('ru-RU')}
          </span>
          <Icon iconName={'icon-ruble'} color="dark_gray" fontSize="28px" />
        </div>
      </div>
    </li>
  );
});

LastTicketCard.displayName = 'LastTicketCard';
