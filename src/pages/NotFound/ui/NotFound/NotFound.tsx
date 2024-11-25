import { memo } from 'react';
import { Button } from '@shared/ui/Button';
import styles from './NotFound.module.scss';

export const NotFound = memo(() => {
  return (
    <div className={styles.component}>
      <div className={styles.content}>404</div>
      <p className={styles.title}>
        <span>Упс!</span> <br />
        Что-то пошло не так, такой страницы не существует.
      </p>
      <Button
        tag='Link'
        to='/'
        color='white'
        className={styles.btn}
        uppercase
        size='m'
        onClick={() => scroll(0, 0)}
      >
        На главную
      </Button>
    </div>
  );
});

NotFound.displayName = 'NotFound';
