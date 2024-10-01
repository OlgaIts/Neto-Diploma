import { memo } from 'react';
import classNames from 'classnames';
import { Header } from '@widgets/Header';
import { ProgressSteps } from '@shared/ui/ProgressSteps';
import { RoutesFilters } from '@widgets/RoutesFilters';
import { useGetSeats } from '@entities/seats';
import { WagonSeats } from '@widgets/WagonSeats';
import { Title } from '@shared/ui/Title';
import { Button } from '@shared/ui/Button';
import styles from './SeatsPage.module.scss';

export const SeatsPage = memo(() => {
  useGetSeats();

  return (
    <div className={classNames(styles.component)}>
      <Header />
      <ProgressSteps />
      <div className={styles.container}>
        <main className={styles.main}>
          <aside>
            <RoutesFilters disabled />
          </aside>
          <section className={styles.section}>
            <Title
              color='dark'
              weight='medium'
              uppercase
              className={styles.title}
            >
              Выбор мест
            </Title>
            <WagonSeats />
          </section>
        </main>
        <Button
          tag='button'
          size='s'
          uppercase
          color='white'
          className={styles.btn}
        >
          Далее
        </Button>
      </div>
    </div>
  );
});

SeatsPage.displayName = 'SeatsPage';
