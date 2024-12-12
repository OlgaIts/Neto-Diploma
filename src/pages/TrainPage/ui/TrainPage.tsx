import { memo } from 'react';
import { Header } from '@widgets/Header';
import { RoutesFilters } from '@widgets/RoutesFilters';
import { RoutesTicketsPanel } from '@widgets/RoutesTicketsPanel';
import { LastTickets } from '@entities/lastRoutes';
import { ProgressSteps } from '@shared/ui/ProgressSteps';
import styles from './TrainPage.module.scss';
import { useAppSelector } from '@shared/lib/hooks';
import { getRoutesLoading, useGetRoutes } from '@entities/routes';
import { Preloader } from '@shared/ui/Preloader';

export const TrainPage = memo(() => {
  useGetRoutes();
  const isLoading = useAppSelector(getRoutesLoading);

  return (
    <div className={styles.component}>
      <Header />

      {!isLoading && (
        <>
          <ProgressSteps step='step_1' />
          <div className={styles.container}>
            <main className={styles.main}>
              <aside>
                <RoutesFilters />
                <section>
                  <LastTickets />
                </section>
              </aside>
              <section className={styles.section}>
                <RoutesTicketsPanel />
              </section>
            </main>
          </div>
        </>
      )}
      {isLoading && (
        <div className={styles.preloader}>
          <div className={styles.wrapper}>
            <p>идёт поиск</p>
            <Preloader />
          </div>
        </div>
      )}
    </div>
  );
});
TrainPage.displayName = 'TrainPage';
