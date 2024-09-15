import { memo, useState } from 'react';
import classNames from 'classnames';
import { Icon } from '@shared/ui/Icon';
import { Title } from '@shared/ui/Title';
import { RoundTripTime } from '@widgets/RoutesFilters';
import { timeFiltersQueryParams } from '../consts/timeFiltersQueryParams';
import styles from './RouteTimeFilter.module.scss';

interface RouteTimeFilterProps {
  className?: string;
  type: keyof typeof timeFiltersQueryParams;
  title: string;
}

export const RouteTimeFilter = memo(
  ({ className, type, title }: RouteTimeFilterProps) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <header className={classNames(styles.header, className)}>
          <div className={styles.title_wrapper}>
            <div className={styles.icon_wrapper}>
              <Icon
                iconName={'icon-arrow-fat-right'}
                color='dark'
                fontSize='16px'
                className={styles.icon}
              />
            </div>
            <Title color='light' weight='regular' className={styles.title}>
              {title}
            </Title>
          </div>
          <button
            className={styles.open_btn}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? (
              <Icon iconName={'icon-minus'} color='white' />
            ) : (
              <Icon iconName={'icon-plus'} color='white' />
            )}
          </button>
        </header>
        {/* {open && <TimeSlider func={getRoutes} />} */}
        {open && (
          <RoundTripTime routeDirection={timeFiltersQueryParams[type]} />
        )}
      </>
    );
  },
);
RouteTimeFilter.displayName = 'RouteTimeFilter';
