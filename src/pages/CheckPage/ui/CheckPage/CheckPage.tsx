import { memo } from 'react';
import { Header } from '@widgets/Header';
import { ProgressSteps } from '@shared/ui/ProgressSteps';
import { TripDetails } from '@widgets/TripDetails';
import { CheckTicket } from '@widgets/Check';
import styles from './CheckPage.module.scss';

export const CheckPage = memo(() => {
  return (
    <div className={styles.component}>
      <Header />
      <ProgressSteps step='step_4' />
      <div className={styles.container}>
        <main className={styles.main}>
          <aside>
            <TripDetails />
          </aside>
          <CheckTicket />
        </main>
      </div>
    </div>
  );
});
CheckPage.displayName = 'CheckPage';
