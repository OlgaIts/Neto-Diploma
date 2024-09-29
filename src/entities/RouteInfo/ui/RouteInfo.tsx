import { memo } from 'react';
import moment from 'moment';
import classNames from 'classnames';
import { Icon } from '@shared/ui/Icon';
import { useAppSelector } from '@shared/lib/hooks/useReduxHooks';
import { formatDatetime } from '@shared/lib/helpers/formatDatetime';
import { getArrivalInfo, getDepartureInfo } from '@entities/seats';
import styles from './RouteInfo.module.scss';

export const RouteInfo = memo(() => {
  //TODO: достать выше.... cделать компонент переиспользуемым
  const departure = useAppSelector(getDepartureInfo);
  const arrival = useAppSelector(getArrivalInfo);

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
          <p className={styles.train_name}>{departure?.train.name}</p>
          <p>
            {departure?.from.city.name}
            <span>
              <Icon iconName={'icon-arrow-thin'} color='dark' />
            </span>
          </p>
          <p>{departure?.to.city.name}</p>
        </div>
      </div>

      <div className={styles.box}>
        <div className={styles.citys}>
          <div>
            <p className={styles.time}>
              {formatDatetime(departure?.from.datetime)}
            </p>
            <p className={styles.city_name}>{departure?.from.city.name}</p>
            <p className={styles.station}>
              {departure?.from.railway_station_name} вокзал
            </p>
          </div>
          <Icon
            iconName={'icon-arrow-fat-right'}
            color='accent'
            fontSize='30px'
          />
          <div>
            <p className={styles.time}>
              {formatDatetime(departure?.to.datetime)}
            </p>
            <p className={styles.city_name}>{departure?.to.city.name}</p>
            <p className={styles.station}>
              {departure?.to.railway_station_name} вокзал
            </p>
          </div>
        </div>
      </div>

      <div className={styles.time_wrapper}>
        <Icon iconName={'icon-clock'} fontSize='30px' color='accent' />
        {TimeDisplay(departure?.duration)}
      </div>
    </div>
  );
});
RouteInfo.displayName = 'RouteInfo';
