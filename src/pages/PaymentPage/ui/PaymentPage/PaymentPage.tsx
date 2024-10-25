import { memo } from 'react';
import classNames from 'classnames';
import { Header } from '@widgets/Header';
import { Title } from '@shared/ui/Title';
import styles from './PaymentPage.module.scss';
import { TripDetails } from '@widgets/TripDetails';

interface PaymentPageProps {
  className?: string;
}
export const PaymentPage = memo(({ className }: PaymentPageProps) => {
  return (
    <div className={classNames(styles.component, className)}>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <aside>
            <TripDetails />
          </aside>

          <section className={styles.section}>
            <div className={styles.title_wrapper}>
              <Title color='dark' weight='regular'>
                Персональные данные
              </Title>
            </div>
            <form action=''></form>
          </section>
        </main>
      </div>
    </div>
  );
});
PaymentPage.displayName = 'PaymentPage';
