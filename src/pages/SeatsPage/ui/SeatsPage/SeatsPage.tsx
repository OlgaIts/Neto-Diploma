import { memo } from 'react';
import classNames from 'classnames';
import { Header } from '@widgets/Header';
import { ArrivalWagonSeats, DepartureWagonSeats } from '@widgets/WagonSeats';
import { RoutesFilters } from '@widgets/RoutesFilters';
import { PassengerPageLink } from '@features/PassengerPageLink/insex';
import { useGetSeats } from '@entities/seats';
import { ProgressSteps } from '@shared/ui/ProgressSteps';
import { Title } from '@shared/ui/Title';
import styles from './SeatsPage.module.scss';

export const SeatsPage = memo(() => {
  useGetSeats();

  return (
    <div className={classNames(styles.component)}>
      <Header />
      <ProgressSteps step='step_1' />
      <div className={styles.container}>
        <main className={styles.main}>
          <aside>
            <RoutesFilters disabled />
          </aside>
          <section className={styles.section}>
            <Title color='dark' weight='medium' uppercase>
              Выбор мест
            </Title>

            <DepartureWagonSeats />
            <ArrivalWagonSeats />

            <PassengerPageLink />
          </section>
        </main>
      </div>
    </div>
  );
});

SeatsPage.displayName = 'SeatsPage';
