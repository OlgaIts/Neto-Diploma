import { memo } from 'react';
import styles from './Header.module.scss';
import { HeaderNav } from '@shared/ui/HeaderNav';
import { TicketForm } from '@features/TicketForm';

export const Header = memo(() => {
  return (
    <header className={styles.header}>
      <HeaderNav />
      <div className={styles.container}>
        <TicketForm />
      </div>
    </header>
  );
});
Header.displayName = 'Header';
