import { memo } from 'react';
import { TicketForm } from '@features/TicketForm';
import { HeaderNav } from '@shared/ui/HeaderNav';
import styles from './Header.module.scss';

export const Header = memo(() => {
  return (
    <header className={styles.header}>
      <HeaderNav />
      <div className={styles.container}>
        <TicketForm className={styles.form} />
      </div>
    </header>
  );
});
Header.displayName = 'Header';
