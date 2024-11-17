import { memo } from 'react';
import classNames from 'classnames';
import { useAppSelector } from '@shared/lib/hooks';
import { getTotalCount } from '@entities/routes';
import { RouteSortFilter } from '../RouteSortFilter/RouteSortFilter';
import { RouteCardsView } from '../RouteCardsView/RouteCardsView';
import styles from './RouteMainFilters.module.scss';

interface RouteMainFiltersProps {
  className?: string;
}

export const RouteMainFilters = memo(({ className }: RouteMainFiltersProps) => {
  const total = useAppSelector(getTotalCount);

  return (
    <div className={classNames(styles.component, className)}>
      <p>
        найдено <span>{total}</span>
      </p>
      <RouteSortFilter />
      <RouteCardsView />
    </div>
  );
});

RouteMainFilters.displayName = 'RouteMainFilters';
