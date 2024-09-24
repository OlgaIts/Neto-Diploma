import { memo } from 'react';
import classNames from 'classnames';
import { Header } from '@widgets/Header';
import { ProgressSteps } from '@shared/ui/ProgressSteps';
import { RoutesFilters } from '@widgets/RoutesFilters';
import { useGetSeats } from '@entities/seats/hooks/useGetSeats';
import { WagonSeats } from '@widgets/WagonSeats';
import styles from './SeatsPage.module.scss';
import { Title } from '@shared/ui/Title';

interface SeatsPageProps {
  className?: string;
}

export const SeatsPage = memo(({ className }: SeatsPageProps) => {
  useGetSeats();
  return (
    <div className={classNames(styles.component, className)}>
      <Header />
      <ProgressSteps />
      <div className={styles.container}>
        <main className={styles.main}>
          <aside>
            <RoutesFilters />
          </aside>
          <section className={styles.section}>
            <Title
              color='dark'
              weight='medium'
              uppercase
              className={styles.title}
            >
              Выбор мест
            </Title>
            <WagonSeats />
          </section>
        </main>
      </div>
    </div>
  );
});

SeatsPage.displayName = 'SeatsPage';
