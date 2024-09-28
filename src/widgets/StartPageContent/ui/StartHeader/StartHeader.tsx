import { memo } from 'react';
import { HeaderNav } from '@shared/ui/HeaderNav';
import { TicketForm } from '@features/TicketForm';
import styles from './StartHeader.module.scss';

export const StartHeader = memo(() => {
  return (
    <header className={styles.header}>
      <HeaderNav />
      <div className={styles.container}>
        <div className={styles.title_wrap}>
          <h1 className={styles.title}>
            Вся жизнь - <span>путешествие!</span>
          </h1>
          <TicketForm />
        </div>
      </div>
    </header>
  );
});
StartHeader.displayName = 'StartHeader';
