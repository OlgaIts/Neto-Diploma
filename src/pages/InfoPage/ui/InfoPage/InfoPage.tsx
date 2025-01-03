import { memo } from 'react';
import { InfoPageContent } from '@widgets/InfoPageContent';
import { HeaderNav } from '@shared/ui/HeaderNav';
import styles from './InfoPage.module.scss';

export const InfoPage = memo(() => {
  return (
    <div className={styles.component}>
      <header className={styles.header}>
        <HeaderNav />
        <div className={styles.container}>
          <h1 className={styles.title}>Процедура совершения покупки</h1>
        </div>
      </header>
      <main className={styles.container}>
        <InfoPageContent />
      </main>
    </div>
  );
});

InfoPage.displayName = 'InfoPage';
