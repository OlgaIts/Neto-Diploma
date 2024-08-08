import classNames from 'classnames';
import { memo } from 'react';
import { HeaderNav } from '../../../shared/ui/HeaderNav';
import { Title } from '../../../shared/ui/Title';
import { Switch } from '../../../shared/ui/Switch';
import Coupe from '../../../shared/assets/svg/aside/coupe.svg?react';
import Berth from '../../../shared/assets/svg/aside/berth.svg?react';
import Sitting from '../../../shared/assets/svg/aside/Sitting.svg?react';
import Luxe from '../../../shared/assets/svg/aside/Luxe.svg?react';
import WiFi from '../../../shared/assets/svg/aside/Wi-Fi.svg?react';
import Express from '../../../shared/assets/svg/aside/Express.svg?react';

import styles from './TrainPage.module.scss';
import { Calendar } from '../../../features/Calendar';

interface TrainPageProps {
  className?: string;
}
export const TrainPage = memo(({ className }: TrainPageProps) => {
  return (
    <>
      <header className={styles.header}>
        <HeaderNav />
        <div className={styles.container}>
          <form action="">
            <input type="text" />
            <button>trainpage</button>
          </form>
        </div>
      </header>

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
        <main>
          <aside>
            <section className={styles.filter}>
              <Title color="light" weight="regular">
                Дата поездки
              </Title>
              <button>30.08.2018</button>
              <Title color="light" weight="regular">
                Дата возвращения
              </Title>
              <button>09.09.2018</button>

              <div className={styles.options_wrapper}>
                <div className={styles.option}>
                  <Coupe className={styles.icon} />
                  <span>Купе</span>
                  <Switch className={styles.switch} />
                </div>

                <div className={styles.option}>
                  <Berth className={styles.icon} />
                  <span>Плацкарт </span>
                  <Switch className={styles.switch} />
                </div>

                <div className={styles.option}>
                  <Sitting className={styles.icon} />
                  <span>Сидячий</span>
                  <Switch className={styles.switch} />
                </div>

                <div className={styles.option}>
                  <Luxe className={styles.icon} />
                  <span>Люкс</span>
                  <Switch className={styles.switch} />
                </div>

                <div className={styles.option}>
                  <WiFi className={styles.icon} />
                  <span>Wi-Fi</span>
                  <Switch className={styles.switch} />
                </div>

                <div className={styles.option}>
                  <Express className={styles.icon} />
                  <span>Экспресс</span>
                  <Switch className={styles.switch} />
                </div>
              </div>
              <Title color="light" weight="regular">
                Стоимость
              </Title>
            </section>
            <section className={styles.latest_view}>последние билеты</section>
          </aside>
          <section>
            <Calendar />
          </section>
        </main>
      </div>
    </>
  );
});
TrainPage.displayName = 'TrainPage';
