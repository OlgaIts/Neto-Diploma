import { memo } from 'react';
import classNames from 'classnames';
import { DirectionFilterHeader } from '@shared/ui/DirectionFilterHeader';
import { Icon } from '@shared/ui/Icon';
import styles from './TripFilters.module.scss';

interface TripDetailFiltersProps {
  className?: string;
  iconName?: string;
  title?: string;
}
export const TripFilters = memo(
  ({ className, iconName, title }: TripDetailFiltersProps) => {
    return (
      <div className={classNames(className)}>
        <DirectionFilterHeader
          iconName={iconName}
          title={title}
          date='30.08.2024'
        >
          <div className={styles.component}>
            <div className={styles.wrapper}>
              <div className={styles.train_wrapper}>
                <span>№ Поезда</span>
                <span className={styles.train_number}>116С</span>
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
        </DirectionFilterHeader>
      </div>
    );
  },
);
TripFilters.displayName = 'TripFilters';
