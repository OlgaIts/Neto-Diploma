import { memo } from 'react';
import classNames from 'classnames';
import { Header } from '@widgets/Header';
import { ProgressSteps } from '@shared/ui/ProgressSteps';
import { TripDetails } from '@widgets/TripDetails';
import { Icon } from '@shared/ui/Icon';
import { Title } from '@shared/ui/Title';
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
            {/* TODO: отдельный компонент */}
            {/* <div className={styles.add_wrapper}>
              <Title color='dark' weight='regular'>
                Добавить пассажира
              </Title>
              <Icon
                className={styles.add_icon}
                iconName={'icon-plus'}
                onClick={() => console.log('add')}
                color='accent'
              />
            </div> */}
            <AddPassengerForm />
          </section>
        </main>
      </div>
    </div>
  );
});

PassengerPage.displayName = 'PassengerPage';
