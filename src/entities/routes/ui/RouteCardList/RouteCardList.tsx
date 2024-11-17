import { memo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAppSelector } from '@shared/lib/hooks';
import { getRoutesData } from '../../model/selectors/selector';
import { RouteCard } from '../RouteCard/RouteCard';
import styles from './RouteCardList.module.scss';

export const RouteCardList = memo(() => {
  const RoutesData = useAppSelector(getRoutesData);
  if (!RoutesData) {
    return null;
  }

  return (
    <ul className={styles.route_list}>
      {RoutesData.map((item) => (
        <li key={uuidv4()}>
          <RouteCard item={item} />
        </li>
      ))}
    </ul>
  );
});
RouteCardList.displayName = 'RouteCardList';
