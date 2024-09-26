import { memo } from 'react';
import classNames from 'classnames';
import styles from './TripDetails.module.scss';
import { Title } from '@shared/ui/Title';

interface TripDetailsProps {
  className?: string;
}
export const TripDetails = memo(({ className }: TripDetailsProps) => {
  return (
    <section className={classNames(styles.component, className)}>
      <Title weight='medium' color='light' uppercase className={styles.title}>
        Детали поездки
      </Title>
      <article className={styles.article}>cvxvcxv</article>
      <article className={styles.article}>cvxvcxv</article>
      <article className={styles.article}>cvxvcxv</article>
    </section>
  );
});
TripDetails.displayName = 'TripDetails';
