import { memo } from 'react';
import classNames from 'classnames';
import { Button } from '@shared/ui/Button';
import { ProgressSteps } from '@shared/ui/ProgressSteps';
import { Header } from '@widgets/Header';
import { TripDetails } from '@widgets/TripDetails';
import { AddPassengerForm } from './AddPassengerForm/AddPassengerForm';
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
            <AddPassengerForm />
            <Button color='white' tag='Link' bgColor='primary' to='/payment'>
              Далее
            </Button>
          </section>
        </main>
      </div>
    </div>
  );
});

PassengerPage.displayName = 'PassengerPage';
