import { memo, useState } from 'react';
import classNames from 'classnames';
import {
  useAppDispatch,
  useAppSelector,
} from '@shared/lib/hooks/useReduxHooks';
import {
  RouteSortType,
  getTotalCount,
  setRouteFilters,
} from '@entities/routes';
import { sortList } from '../consts/sortList';
import styles from './RouteMainFilters.module.scss';

interface RouteMainFiltersProps {
  className?: string;
}

const limitList: number[] = [5, 10, 20];

export const RouteMainFilters = memo(({ className }: RouteMainFiltersProps) => {
  const [sortType, setSortType] = useState('date');
  const [open, setOpen] = useState(false);
  const total = useAppSelector(getTotalCount);
  const dispatch = useAppDispatch();
  const activeLimit = useAppSelector(
    (state) => state.routes.routeFilters.limit,
  );

  const changeSortType = (type: RouteSortType) => {
    setSortType(type);
    dispatch(setRouteFilters({ sort: type }));
    setOpen(false);
  };

  const changeLimit = (limit: number) => {
    dispatch(setRouteFilters({ limit }));
  };
  
  return (
    <div className={classNames(styles.component, className)}>
      <p>
        найдено <span>{total}</span>
      </p>
      <div className={styles.sort_wrapper}>
        <div>
          <span className={styles.sort}>сортировать по:</span>
          <span onClick={() => setOpen(!open)} className={styles.active}>
            {sortList.find((item) => item.type === sortType)?.name}
          </span>
        </div>
        {open && (
          <ul className={styles.list}>
            {sortList.map((item) => (
              <li
                key={item.id}
                className={styles.item}
                onClick={() => changeSortType(item.type)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>

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
    </div>
  );
});

RouteMainFilters.displayName = 'RouteMainFilters';
