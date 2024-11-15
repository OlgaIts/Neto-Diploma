import { memo } from 'react';
import classNames from 'classnames';
import { DirectionFilterHeader } from '@shared/ui/DirectionFilterHeader';
import { Icon } from '@shared/ui/Icon';
import { PassengerFilter } from '../PassengerFilter/PassengerFilter';
import { PassengerSeatFilter } from '../PassengerSeatFilter/PassengerSeatFilter';
import styles from './TripDetailFilters.module.scss';
import { useAppSelector } from '@shared/lib/hooks/useReduxHooks';
import { getArrivalInfo, getDepartureInfo } from '@entities/seats';
import { type Direction } from '@shared/types';
import { formatDate } from '@shared/lib/helpers/formatDate';

interface TripDetailFiltersProps {
  className?: string;
  title?: string;
  iconName?: string;
  direction: Direction;
}
//TODO: TropDetailsSidebar
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
                <span>№ Поезда</span>
                <span className={styles.train_number}>
                  {routeInfo?.train.name}
                </span>
              </div>
              <div className={styles.train_wrapper}>
                <span>Название</span>
                <span className={styles.train_name}>Адлер</span>
              </div>
            </div>

            <div className={styles.time_wrapper}>
              <p className={styles.trip_time}>9 : 22</p>
              <div className={styles.train_wrapper}>
                <span className={styles.train_number}>00:10</span>
                <Icon
                  iconName='icon-arrow-fat-right'
                  color='accent'
                  fontSize='20px'
                />
                <span className={styles.train_number}>01:10</span>
              </div>
              <div className={styles.train_wrapper}>
                <span className={styles.subtitle}>30.08.2018</span>
                <span className={styles.subtitle}>31.08.2018</span>
              </div>
            </div>

            <div>
              <div className={styles.train_wrapper}>
                <span>Москва</span>
                <span>Санкт-Петербург</span>
              </div>
              <div className={styles.train_wrapper}>
                <span className={styles.subtitle}>
                  Курский <br /> вокзал
                </span>
                <span className={styles.subtitle}>
                  Ладожский <br /> вокзал
                </span>
              </div>
            </div>
          </div>
          <PassengerFilter />
          <PassengerSeatFilter />
        </DirectionFilterHeader>
      </div>
    );
  },
);
TripDetailFilters.displayName = 'TripDetailFilters';

//удалить или переписать??
