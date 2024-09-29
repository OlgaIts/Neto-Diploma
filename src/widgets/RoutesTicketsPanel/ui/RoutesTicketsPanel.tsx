import { memo } from 'react';
import { RouteCardList, useGetRoutes } from '@entities/routes';
import { RoutePagination } from '@features/RoutePagination';
import { RouteMainFilters } from '@features/RouteMainFilters';
import styles from './RoutesTicketsPanel.module.scss';

export const RoutesTicketsPanel = memo(() => {
  useGetRoutes();
  return (
    <>
      <RouteMainFilters className={styles.main_filter} />
      <RouteCardList />
      <RoutePagination className={styles.pagination} />
    </>
  );
});
RoutesTicketsPanel.displayName = 'RoutesTicketsPanel';
