import { memo } from 'react';
import { RouteCard } from '@entities/routes';
import { Header } from '@widgets/ui/Header';
import { Filters } from './Filters/Filters';
import styles from './TrainPage.module.scss';

export const TrainPage = memo(() => {
  return (
    <div className={styles.component}>
      <Header />
      {/* //TODO: отдельный компонент */}
      <div className={styles.stages}>
        <div className={styles.stage}>
          <div className={styles.step}>1</div>
          <span>Билеты</span>
        </div>
        <div className={styles.stage}>
          <div className={styles.step}>2</div>
          <span>Пассажиры</span>
        </div>
        <div className={styles.stage}>
          <div className={styles.step}>3</div>
          <span>Оплата</span>
        </div>
        <div className={styles.stage}>
          <div className={styles.step}>4</div>
          <span>Проверка</span>
        </div>
      </div>
      <div className={styles.container}>
        <main className={styles.main}>
          <aside>
            <Filters />
            <section className={styles.latest_view}>последние билеты</section>
          </aside>
          <section>
            <RouteCard />
          </section>
        </main>
      </div>
    </div>
  );
});
TrainPage.displayName = 'TrainPage';
