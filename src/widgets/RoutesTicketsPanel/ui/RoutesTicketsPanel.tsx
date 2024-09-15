import { memo } from 'react';
import { RouteCardList, useGetRoutes } from '@entities/routes';
import { Pagination } from '@shared/ui/Pagination';
import { MainFilters } from '@pages/TrainPage/ui/MainFilters/MainFilters'; //TODO: в фичи
import styles from './RoutesTicketsPanel.module.scss';

export const RoutesTicketsPanel = memo(() => {
  useGetRoutes();
  return (
    <>
      <MainFilters className={styles.main_filter} />
      <RouteCardList />
      <Pagination className={styles.pagination} />
    </>
  );
});
RoutesTicketsPanel.displayName = 'RoutesTicketsPanel';
