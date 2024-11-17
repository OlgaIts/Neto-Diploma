import { memo } from 'react';
import moment from 'moment';
import classNames from 'classnames';
import { Icon } from '@shared/ui/Icon';
import { useAppSelector } from '@shared/lib/hooks';
import { formatDatetime } from '@shared/lib/helpers';
import {
  getArrivalInfo,
  getDepartureInfo,
} from '../../model/selectors/seatsSelector';
import styles from './RouteInfo.module.scss';

interface RouteInfoProps {
  direction: 'departure' | 'arrival';
}

export const RouteInfo = memo(({ direction }: RouteInfoProps) => {
  const isDeparture = direction === 'departure';
  const getRouteInfo = isDeparture ? getDepartureInfo : getArrivalInfo;
  const routeInfo = useAppSelector(getRouteInfo);

  const TimeDisplay = (timeInSeconds: number = 0) => {
    const time = moment.unix(timeInSeconds);
    const hours = time.hours();
    const minutes = time.minutes();

    return (
      <div>
        <p>{hours} часов</p>
        <p>{minutes} минут</p>
      </div>
    );
  };

  return (
    <div className={styles.route_wrapper}>
      <div className={classNames(styles.box, styles.train_wrapper)}>
        <div className={styles.icon_train_wrapper}>
          <Icon iconName={'icon-train'} color='accent' fontSize='16px' />
        </div>
        <div className={styles.route}>
          <p className={styles.train_name}>{routeInfo?.train.name}</p>
          <p>
            {routeInfo?.from.city.name}
            <span>
              <Icon iconName={'icon-arrow-thin'} color='dark' />
            </span>
          </p>
          <p>{routeInfo?.to.city.name}</p>
        </div>
      </div>

      <div className={styles.box}>
        <div className={styles.cities}>
          <div>
            <p className={styles.time}>
              {formatDatetime(routeInfo?.from.datetime)}
            </p>
            <p className={styles.city_name}>{routeInfo?.from.city.name}</p>
            <p className={styles.station}>
              {routeInfo?.from.railway_station_name} вокзал
            </p>
          </div>
          <Icon
            iconName={'icon-arrow-fat-right'}
            color='accent'
            fontSize='30px'
          />
          <div>
            <p className={styles.time}>
              {formatDatetime(routeInfo?.to.datetime)}
            </p>
            <p className={styles.city_name}>{routeInfo?.to.city.name}</p>
            <p className={styles.station}>
              {routeInfo?.to.railway_station_name} вокзал
            </p>
          </div>
        </div>
      </div>

      <div className={styles.time_wrapper}>
        <Icon iconName={'icon-clock'} fontSize='30px' color='accent' />
        {TimeDisplay(routeInfo?.duration)}
      </div>
    </div>
  );
});
RouteInfo.displayName = 'RouteInfo';
