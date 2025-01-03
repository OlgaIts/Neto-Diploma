import { memo } from 'react';
import classNames from 'classnames';
import { getTotalCount } from '@entities/routes';
import { useAppSelector } from '@shared/lib/hooks';
import { RouteSortFilter } from '../RouteSortFilter/RouteSortFilter';
import { RouteCardsView } from '../RouteCardsView/RouteCardsView';
import styles from './RouteMainFilters.module.scss';

interface RouteMainFiltersProps {
  className?: string;
}

export const RouteMainFilters = memo(({ className }: RouteMainFiltersProps) => {
  const total = useAppSelector(getTotalCount);

  return (
    <>
      {total === 0 ? (
        <div className={styles.not_found}>
          <h3 className={styles.text}>По вашему запросу ничего не найдено.</h3>
          <p>Попробуйте выбрать другое направление</p>
        </div>
      ) : (
        <div className={classNames(styles.component, className)}>
          <p>
            найдено <span>{total}</span>
          </p>
          <RouteSortFilter />
          <RouteCardsView />
        </div>
      )}
    </>
  );
});

RouteMainFilters.displayName = 'RouteMainFilters';
