import classNames from 'classnames';
import { memo } from 'react';
import styles from './Header.module.scss';
import { HeaderNav } from '@shared/ui/HeaderNav';
import { TicketForm } from '@widgets/ui/TicketForm';

interface HeaderProps {
  className?: string;
}
export const Header = memo(({ className }: HeaderProps) => {
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
