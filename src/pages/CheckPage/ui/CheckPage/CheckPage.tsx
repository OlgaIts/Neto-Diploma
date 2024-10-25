import { memo } from 'react';
import classNames from 'classnames';
import styles from './CheckPage.module.scss';

interface CheckPageProps {
  className?: string;
}
export const CheckPage = memo(({ className }: CheckPageProps) => {
  return (
    <div className={classNames(styles.component, className)}>
      Компонент для примера
    </div>
  );
});
CheckPage.displayName = 'CheckPage';
