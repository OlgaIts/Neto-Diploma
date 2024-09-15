import { memo } from 'react';
import { Header } from '@widgets/Header';
import { LastTickets } from '@entities/lastRoutes';
import { RoutesFilters } from '@widgets/RoutesFilters';
import { ProgressSteps } from '@shared/ui/ProgressSteps';
import { RoutesTicketsPanel } from '@widgets/RoutesTicketsPanel';
import styles from './TrainPage.module.scss';

export const TrainPage = memo(() => {
  return (
    <div className={styles.component}>
      <Header />
      <ProgressSteps />
      <div className={styles.container}>
        <main className={styles.main}>
          <aside>
            <RoutesFilters />
            <section className={styles.latest_view}>
              <LastTickets />
            </section>
          </aside>
          <section>
            <RoutesTicketsPanel />
          </section>
        </main>
      </div>
    </div>
  );
});
TrainPage.displayName = 'TrainPage';
