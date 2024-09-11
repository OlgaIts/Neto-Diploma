import { memo } from 'react';
import { RouteCard, getRoutesData } from '@entities/routes';
import { Header } from '@widgets/ui/Header';
import { LastTickets } from '@entities/lastRoutes';
import { useAppSelector } from '@shared/lib/hooks/useReduxHooks';
import { Pagination } from '@shared/ui/Pagination';
import { Filters } from './Filters/Filters';
import { MainFilters } from './MainFilters/MainFilters';
import styles from './TrainPage.module.scss';

export const TrainPage = memo(() => {
  const RoutesData = useAppSelector(getRoutesData);

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
            <section className={styles.latest_view}>
              <LastTickets />
            </section>
          </aside>
          <section>
            <MainFilters className={styles.main_filter} />

            <ul className={styles.route_list}>
              {RoutesData.map((item) => (
                <li key={item.departure.train._id}>
                  <RouteCard item={item} />
                </li>
              ))}
            </ul>
            <Pagination className={styles.pagination} />
          </section>
        </main>
      </div>
    </div>
  );
});
TrainPage.displayName = 'TrainPage';
