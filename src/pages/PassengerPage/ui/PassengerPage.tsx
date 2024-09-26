import { memo } from 'react';
import classNames from 'classnames';
import { Header } from '@widgets/Header';
import { ProgressSteps } from '@shared/ui/ProgressSteps';
import { TripDetails } from '@widgets/TripDetails';
import { Icon } from '@shared/ui/Icon';
import { Title } from '@shared/ui/Title';
import styles from './PassengerPage.module.scss';

interface PassengerPageProps {
  className?: string;
}

export const PassengerPage = memo(({ className }: PassengerPageProps) => {
  return (
    <div className={classNames(styles.component, className)}>
      <Header />
      <ProgressSteps />
      <div className={styles.container}>
        <main className={styles.main}>
          <aside>
            <TripDetails />
          </aside>
          <section className={styles.section}>
            {/* TODO: отдельный компонент */}
            <div className={styles.add_wrapper}>
              <Title color='dark' weight='regular'>
                Добавить пассажира
              </Title>
              <Icon
                className={styles.add_icon}
                iconName={'icon-plus'}
                onClick={() => console.log('add')}
                color='accent'
              />
            </div>

            <div className={styles.passenger}>
              <header className={styles.passenger_header}>
                <div className={styles.title_wrapper}>
                  <div className={styles.icon_wrapper}>
                    <Icon
                      iconName={'icon-plus'}
                      color='accent'
                      fontSize='16px'
                    />
                  </div>
                  <Title color='dark' weight='regular'>
                    Пассажир <span>1</span>
                  </Title>
                </div>
                <Icon
                  iconName={'icon-close'}
                  fontSize='12px'
                  color='grey'
                  className={styles.passenger_icon}
                />
              </header>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
});

PassengerPage.displayName = 'PassengerPage';
