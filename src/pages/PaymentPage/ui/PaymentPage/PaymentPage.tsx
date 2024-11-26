import { memo } from 'react';
import classNames from 'classnames';
import { Header } from '@widgets/Header';
import { Title } from '@shared/ui/Title';
import styles from './PaymentPage.module.scss';
import { TripDetails } from '@widgets/TripDetails';
import { ProgressSteps } from '@shared/ui/ProgressSteps';
import { PaymentPersonForm } from '@features/PaymentPersonForm';
import { PaymentMethodForm } from '@features/PaymentPersonForm/ui/PaymentMethodForm/PaymentMethodForm';

interface PaymentPageProps {
  className?: string;
}
export const PaymentPage = memo(({ className }: PaymentPageProps) => {
  return (
    <div className={classNames(styles.component, className)}>
      <Header />
      <ProgressSteps step='step_3' />

      <div className={styles.container}>
        <main className={styles.main}>
          <aside>
            <TripDetails />
          </aside>

          {/* //TODO: вынести в виджет */}
          <section className={styles.section}>
            <div className={styles.title_wrapper}>
              <Title color='dark' weight='regular'>
                Персональные данные
              </Title>
            </div>

            <PaymentPersonForm />
            <div className={styles.title_wrapper}>
              <Title color='dark' weight='regular'>
                Способ оплаты
              </Title>
            </div>
            <PaymentMethodForm />
          </section>
        </main>
      </div>
    </div>
  );
});
PaymentPage.displayName = 'PaymentPage';
