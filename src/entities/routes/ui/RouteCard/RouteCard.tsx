import classNames from 'classnames';
import { memo, useEffect, useState } from 'react';
import { Icon } from '@shared/ui/Icon';
import styles from './RouteCard.module.scss';
import { Button } from '@shared/ui/Button';
import { WagonTypes } from '../WagonTypes/WagonTypes';

interface RouteCardProps {
  className?: string;
}
export const RouteCard = memo(({ className }: RouteCardProps) => {
  return (
    <div className={classNames(styles.component)}>
      <div className={styles.train_wrapper}>
        <div className={styles.icon_wrap}>
          <Icon iconName={'icon-train'} fontSize='54px' color='white' />
        </div>
        <span className={styles.train_namber}>116С</span>
        <div className={styles.train_route}>
          <p>
            Адлер
            <Icon iconName={'icon-arrow-thin'} color='grey' />
          </p>
          <p>
            Москва <Icon iconName={'icon-arrow-thin'} color='dark' />
          </p>
          <p>Санкт-Петербург</p>
        </div>
      </div>

      <div className={styles.info}>
        <div className={styles.routes_wrap}>
          <div className={styles.route}>
            <div className={styles.route_direction}>
              <span className={styles.time}>00:10</span>
              <span className={styles.city}>Москва</span>
              <span className={styles.station}>Курский вокзал</span>
            </div>
            <div className={styles.trevel_time}>
              <span>9 : 42</span>
              <Icon
                iconName={'icon-arrow-fat'}
                color='accent'
                fontSize='30px'
                className={styles.icon}
              />
            </div>
            <div className={styles.route_direction}>
              <span className={styles.time}>09:52</span>
              <span className={styles.city}>Санкт-Петербург</span>
              <span className={styles.station}>Ладожский вокзал</span>
            </div>
          </div>
          <div className={styles.route}>
            <div className={styles.route_direction}>
              <span className={styles.time}>00:10</span>
              <span className={styles.city}>Москва</span>
              <span className={styles.station}>Курский вокзал</span>
            </div>
            <div className={styles.trevel_time}>
              <span>9 : 42</span>
              <Icon
                iconName={'icon-arrow-fat'}
                color='accent'
                fontSize='30px'
              />
            </div>
            <div className={styles.route_direction}>
              <span className={styles.time}>09:52</span>
              <span className={styles.city}>Санкт-Петербург</span>
              <span className={styles.station}>Ладожский вокзал</span>
            </div>
          </div>
        </div>

        <WagonTypes />
      </div>
    </div>
  );
});
RouteCard.displayName = 'RouteCard';
