import { memo } from 'react';
import classNames from 'classnames';
import { Icon } from '../Icon';
import styles from './Preloader.module.scss';

interface PreloaderProps {
  className?: string;
}

export const Preloader = memo(({ className }: PreloaderProps) => {
  return (
    <div className={classNames(styles.component, className)}>
      <div className={styles.iconContainer}>
        <Icon iconName='icon-wagons' className={styles.icon} fontSize='28px' />
        <div className={styles.line}></div>
      </div>
    </div>
  );
});

Preloader.displayName = 'Preloader';
