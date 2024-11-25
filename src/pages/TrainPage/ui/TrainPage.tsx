import { memo } from 'react';
import { Header } from '@widgets/Header';
import { RoutesFilters } from '@widgets/RoutesFilters';
import { RoutesTicketsPanel } from '@widgets/RoutesTicketsPanel';
import { LastTickets } from '@entities/lastRoutes';
import { ProgressSteps } from '@shared/ui/ProgressSteps';
import styles from './TrainPage.module.scss';

export const TrainPage = memo(() => {
  return (
    <div className={styles.component}>
      <Header />
      <ProgressSteps step='step_1' />
      <div className={styles.container}>
        <main className={styles.main}>
          <aside>
            <RoutesFilters />
            <section>
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
