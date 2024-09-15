import { memo } from 'react';
import { useAppSelector } from '@shared/lib/hooks/useReduxHooks';
import { getRoutesData } from '../../model/selectors/selector';
import { RouteCard } from '../RouteCard/RouteCard';
import styles from './RouteCardList.module.scss';

export const RouteCardList = memo(() => {

  const RoutesData = useAppSelector(getRoutesData);
  return (
    <ul className={styles.route_list}>
      {RoutesData.map((item) => (
        <li key={item.departure.train._id}>
          <RouteCard item={item} />
        </li>
      ))}
    </ul>
  );
});
RouteCardList.displayName = 'RouteCardList';
