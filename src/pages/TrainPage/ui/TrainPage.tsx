import { memo } from 'react';
import { Calendar } from '@features/Calendar';
import { RouteCard } from '@entities/routes';
import { Title } from '@shared/ui/Title';
import { Switch } from '@shared/ui/Switch';
import { Icon } from '@shared/ui/Icon';
import { Header } from '@widgets/ui/Header';
import styles from './TrainPage.module.scss';

export const TrainPage = memo(() => {
  return (
    <div className={styles.component}>
      <Header />

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
            <section className={styles.filter}>
              <Title color='light' weight='regular'>
                Дата поездки
              </Title>
              <button>30.08.2018</button>
              <Title color='light' weight='regular'>
                Дата возвращения
              </Title>
              <button>09.09.2018</button>

              <div className={styles.options_wrapper}>
                <div className={styles.option}>
                  <Icon iconName='icon-coupe' color='primary' />
                  <span>Купе</span>
                  <Switch className={styles.switch} />
                </div>

                <div className={styles.option}>
                  <Icon iconName='icon-berth' color='primary' />
                  <span>Плацкарт </span>
                  <Switch className={styles.switch} />
                </div>

                <div className={styles.option}>
                  <Icon iconName='icon-sitting' color='primary' />
                  <span>Сидячий</span>
                  <Switch className={styles.switch} />
                </div>

                <div className={styles.option}>
                  <Icon iconName='icon-luxe' color='primary' />
                  <span>Люкс</span>
                  <Switch className={styles.switch} />
                </div>

                <div className={styles.option}>
                  <Icon iconName='icon-Wi-Fi' color='primary' />
                  <span>Wi-Fi</span>
                  <Switch className={styles.switch} />
                </div>

                <div className={styles.option}>
                  <Icon iconName='icon-express' color='primary' />
                  <span>Экспресс</span>
                  <Switch className={styles.switch} />
                </div>
              </div>
              <Title color='light' weight='regular'>
                Стоимость
              </Title>
            </section>
            <section className={styles.latest_view}>последние билеты</section>
            <Calendar />
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
