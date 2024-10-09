import { memo } from 'react';
import classNames from 'classnames';
import styles from './ProgressSteps.module.scss';

type Step = '1' | '2' | '3' | '4';
const stages = [
  {
    title: 'Билеты',
    step: 1,
  },
  {
    title: 'Пассажиры',
    step: 2,
  },
  {
    title: 'Оплата',
    step: 3,
  },
  {
    title: 'Проверка',
    step: 4,
  },
];

interface ProgressStepsProps {
  className?: string;
  step?: Step;
}
export const ProgressSteps = memo(({ className, step }: ProgressStepsProps) => {
  return (
    <section className={styles.component}>
      <div className={styles.container}>
        <ul className={styles.stages}>
          {stages.map((item) => (
            <li className={styles.stage} key={item.title}>
              <div className={styles.step}>{item.step}</div>
              <span>{item.title}</span>
              <div className={styles.arrow}></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
});
ProgressSteps.displayName = 'ProgressSteps';
