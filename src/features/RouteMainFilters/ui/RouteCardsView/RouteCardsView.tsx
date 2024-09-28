import { memo } from 'react';
import classNames from 'classnames';
import {
  useAppDispatch,
  useAppSelector,
} from '@shared/lib/hooks/useReduxHooks';
import { setRouteFilters } from '@entities/routes';
import styles from './RouteCardsView.module.scss';

const limitList: number[] = [5, 10, 20];

export const RouteCardsView = memo(() => {
  const dispatch = useAppDispatch();
  const activeLimit = useAppSelector(
    (state) => state.routes.routeFilters.limit,
  );

  const changeLimit = (limit: number) => {
    dispatch(setRouteFilters({ limit }));
  };

  return (
    <div className={styles.limit}>
      показывать по:
      {limitList.map((limit) => (
        <span
          key={limit}
          onClick={() => changeLimit(limit)}
          className={classNames(
            styles.limit_type,
            activeLimit === limit ? styles.active : '',
          )}
        >
          {limit}
        </span>
      ))}
    </div>
  );
});
RouteCardsView.displayName = 'RouteCardsView';
