import { memo } from 'react';
import classNames from 'classnames';
import { ProgressSteps } from '@shared/ui/ProgressSteps';
import { PassengerFormList } from '@features/PassengerForm';
import { PaymentPageLink } from '@features/PaymentPageLink';
import { Header } from '@widgets/Header';
import { TripDetails } from '@widgets/TripDetails';
import styles from './PassengerPage.module.scss';

interface PassengerPageProps {
  className?: string;
}

export const PassengerPage = memo(({ className }: PassengerPageProps) => {
  return (
    <div className={classNames(styles.component, className)}>
      <Header />
      <ProgressSteps step='step_2' />
      <div className={styles.container}>
        <main className={styles.main}>
          <aside>
            <TripDetails />
          </aside>
          <section className={styles.section}>
            <PassengerFormList />
            <PaymentPageLink />
          </section>
        </main>
      </div>
    </div>
  );
});

PassengerPage.displayName = 'PassengerPage';
