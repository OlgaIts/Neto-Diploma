import { memo } from 'react';
import classNames from 'classnames';
import { TripFilters } from '@features/TripFilters';
import { Title } from '@shared/ui/Title';
import { TripDetailFilters } from '@features/TripFilters/ui/TripDetailFilters/TripDetailFilters';
import { TotalFilter } from '@features/TripFilters/ui/TotalFilter/TotalFilter';
import styles from './TripDetails.module.scss';

interface TripDetailsProps {
  className?: string;
}
export const TripDetails = memo(({ className }: TripDetailsProps) => {
  return (
    <section className={classNames(styles.component, className)}>
      <Title weight='medium' color='light' uppercase className={styles.title}>
        Детали поездки
      </Title>
      <article className={styles.article}>
        <TripFilters title='Туда' iconName='icon-arrow-fat-right' />
      </article>
      <article className={styles.article}>
        <TripFilters title='Обратно' iconName='icon-arrow-fat-left' />
      </article>
      <article className={styles.article}>
        <TripDetailFilters title='Туда' iconName='icon-arrow-fat-right' />
      </article>
      <article>
        <TotalFilter />
      </article>
    </section>
  );
});
TripDetails.displayName = 'TripDetails';
