import { memo } from 'react';
import classNames from 'classnames';
import { Route } from '@entities/routes';
import { Title } from '@shared/ui/Title';
import { useGetLastRoute } from '../../model/hooks/useGetLastRoute';
import { LastTicketCard } from '../LastTicketCard/LastTicketCard';
import styles from './LastTickets.module.scss';

interface LastTicketProps {
  className?: string;
}

export const LastTickets = memo(({ className }: LastTicketProps) => {
  const { lastRoutes } = useGetLastRoute();

  const mixArray = (arr: Route[]) => {
    return arr
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  return (
    <div className={classNames(styles.component, className)}>
      <Title color='dark' weight='medium' uppercase className={styles.title}>
        последние билеты
      </Title>
      <ul className={styles.list}>
        {mixArray(lastRoutes)
          .slice(0, 3)
          .map((item) => (
            <LastTicketCard key={item.departure.from.city._id} item={item} />
          ))}
      </ul>
    </div>
  );
});

LastTickets.displayName = 'LastTickets';
