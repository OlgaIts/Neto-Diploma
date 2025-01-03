import { memo } from 'react';
import { ConfirmWidget } from '@widgets/ConfirmWidget';
import { HeaderNav } from '@shared/ui/HeaderNav';
import styles from './ConfirmPage.module.scss';

export const ConfirmPage = memo(() => {
  return (
    <div className={styles.component}>
      <header className={styles.header}>
        <HeaderNav />
        <div className={styles.container}>
          <h1 className={styles.title}>Благодарим Вас за заказ!</h1>
        </div>
      </header>
      <main className={styles.container}>
        <ConfirmWidget />
      </main>
    </div>
  );
});
ConfirmPage.displayName = 'ConfirmPage';
