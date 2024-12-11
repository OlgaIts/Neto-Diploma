import { memo, useState } from 'react';
import { RouteSortType, setRouteFilters } from '@entities/routes';
import { useAppDispatch } from '@shared/lib/hooks';
import { sortList } from '../../consts/sortList';
import styles from './RouteSortFilter.module.scss';

export const RouteSortFilter = memo(() => {
  const dispatch = useAppDispatch();
  const [sortType, setSortType] = useState('date');
  const [open, setOpen] = useState(false);

  const changeSortType = (type: RouteSortType) => {
    setSortType(type);
    dispatch(setRouteFilters({ sort: type }));
    setOpen(false);
  };

  return (
    <div className={styles.sort_wrapper}>
      <div>
        <span className={styles.sort}>сортировать по:</span>
        <span onClick={() => setOpen(!open)} className={styles.sorted_item}>
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
  );
});
RouteSortFilter.displayName = 'RouteSortFilter';
