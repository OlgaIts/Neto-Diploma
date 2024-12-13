import { memo } from 'react';
import { RoutePagination } from '@features/RoutePagination';
import { RouteMainFilters } from '@features/RouteMainFilters';
import { RouteCardList } from '@entities/routes';
import styles from './RoutesTicketsPanel.module.scss';

export const RoutesTicketsPanel = memo(() => {
  return (
    <>
      <RouteMainFilters className={styles.main_filter} />
      <RouteCardList />
      <RoutePagination className={styles.pagination} />
    </>
  );
});
RoutesTicketsPanel.displayName = 'RoutesTicketsPanel';
