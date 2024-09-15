import { memo } from 'react';
import classNames from 'classnames';
import styles from './ProgressSteps.module.scss';

interface ProgressStepsProps {
  className?: string;
}
export const ProgressSteps = memo(({ className }: ProgressStepsProps) => {
  return (
    <div className={styles.stages}>
      <div className={styles.stage}>
        <div className={styles.step}>1</div>
        <span>Билеты</span>
      </div>
      <div className={styles.stage}>
        <div className={styles.step}>2</div>
        <span>Пассажиры</span>
      </div>
      <div className={styles.stage}>
        <div className={styles.step}>3</div>
        <span>Оплата</span>
      </div>
      <div className={styles.stage}>
        <div className={styles.step}>4</div>
        <span>Проверка</span>
      </div>
    </div>
  );
});
ProgressSteps.displayName = 'ProgressSteps';
