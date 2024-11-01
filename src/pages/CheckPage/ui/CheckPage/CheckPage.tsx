import { memo } from 'react';
import { Header } from '@widgets/Header';
import { ProgressSteps } from '@shared/ui/ProgressSteps';
import { TripDetails } from '@widgets/TripDetails';
import { CheckTrain } from '@widgets/Check/ui/CheckTrain/CheckTrain';
import styles from './CheckPage.module.scss';
import { CheckPassenger } from '@widgets/Check/ui/CheckPassenger/CheckPassenger';
import { CheckPay } from '@widgets/Check/ui/CheckPay/CheckPay';

export const CheckPage = memo(() => {
  return (
    <div className={styles.component}>
      <Header />
      <ProgressSteps />
      <div className={styles.container}>
        <main className={styles.main}>
          <aside>
            <TripDetails />
          </aside>
          <section className={styles.section}>
            <CheckTrain />
            <CheckPassenger />
            <CheckPay />
          </section>
        </main>
      </div>
    </div>
  );
});
CheckPage.displayName = 'CheckPage';
