import { memo } from 'react';
import classNames from 'classnames';
import { DirectionFilterHeader } from '@shared/ui/DirectionFilterHeader';
import { Icon } from '@shared/ui/Icon';
import { PassengerFilter } from '../PassengerFilter/PassengerFilter';
import { PassengerSeatFilter } from '../PassengerSeatFilter/PassengerSeatFilter';
import { useAppSelector } from '@shared/lib/hooks/useReduxHooks';
import { getArrivalInfo, getDepartureInfo } from '@entities/seats';
//TODO: поправить пути везде в проекте
import { formatDate, formatDatetime } from '@shared/lib/helpers';
import { type Direction } from '@shared/types';
import styles from './TripDetailFilters.module.scss';

interface TripDetailFiltersProps {
  className?: string;
  title?: string;
  iconName?: string;
  direction: Direction;
}
//TODO: TripDetailsSidebar
export const TripDetailFilters = memo(
  ({ className, iconName, title, direction }: TripDetailFiltersProps) => {
    const isDeparture = direction === 'departure';
    const getRouteInfo = isDeparture ? getDepartureInfo : getArrivalInfo;
    const routeInfo = useAppSelector(getRouteInfo);

    return (
      <div className={classNames(className)}>
        <DirectionFilterHeader
          iconName={iconName}
          title={title}
          date={formatDate(Number(routeInfo?.from.datetime))}
        >
          <div className={styles.component}>
            <div className={styles.wrapper}>
              <div className={styles.train_wrapper}>
                <span>Поезд</span>
                <span className={styles.train_number}>
                  {routeInfo?.train.name}
                </span>
              </div>
              <div className={styles.train_wrapper}>
                <span>Направление</span>
                <div className={styles.train_name_wrapper}>
                  <span className={styles.train_name}>
                    {routeInfo?.from.city.name}
                  </span>
                  <span className={styles.train_name}>
                    {routeInfo?.to.city.name}
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.time_wrapper}>
              <p className={styles.trip_time}>
                {formatDatetime(routeInfo?.duration)}
              </p>
              <div className={styles.train_wrapper}>
                <span className={styles.train_number}>
                  {formatDatetime(routeInfo?.from.datetime)}
                </span>
                <Icon
                  iconName='icon-arrow-fat-right'
                  color='accent'
                  fontSize='20px'
                />
                <span className={styles.train_number}>
                  {formatDatetime(routeInfo?.to.datetime)}
                </span>
              </div>
              <div className={styles.train_wrapper}>
                <span className={styles.subtitle}>
                  {formatDate(Number(routeInfo?.from.datetime))}
                </span>
                <span className={styles.subtitle}>
                  {formatDate(Number(routeInfo?.to.datetime))}
                </span>
              </div>
            </div>

            <div>
              <div className={styles.train_wrapper}>
                <span className={styles.route_city}>
                  {routeInfo?.from.city.name}
                </span>
                <span className={styles.route_city}>
                  {routeInfo?.to.city.name}
                </span>
              </div>
              <div className={styles.train_wrapper}>
                <span className={styles.subtitle}>
                  {routeInfo?.from.railway_station_name} <br /> вокзал
                </span>
                <span className={styles.subtitle}>
                  {routeInfo?.to.railway_station_name}
                  <br /> вокзал
                </span>
              </div>
            </div>
          </div>
          <PassengerFilter direction={direction} />
          <PassengerSeatFilter direction={direction} />
        </DirectionFilterHeader>
      </div>
    );
  },
);
TripDetailFilters.displayName = 'TripDetailFilters';

//удалить или переписать??
