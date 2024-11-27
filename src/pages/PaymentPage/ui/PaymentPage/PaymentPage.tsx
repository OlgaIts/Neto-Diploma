import { memo } from 'react';
import { Header } from '@widgets/Header';
import { TripDetails } from '@widgets/TripDetails';
import { PaymentForm } from '@widgets/PaymentForm';
import { ProgressSteps } from '@shared/ui/ProgressSteps';
import styles from './PaymentPage.module.scss';

export const PaymentPage = memo(() => {
  return (
    <div className={styles.component}>
      <Header />
      <ProgressSteps step='step_3' />

      <div className={styles.container}>
        <main className={styles.main}>
          <aside>
            <TripDetails />
          </aside>

          <PaymentForm />
        </main>
      </div>
    </div>
  );
});
PaymentPage.displayName = 'PaymentPage';
