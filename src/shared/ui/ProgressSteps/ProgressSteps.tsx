import { memo } from 'react';
import classNames from 'classnames';
import { progressStages } from '../../consts/';
import styles from './ProgressSteps.module.scss';

type Step = 'step_1' | 'step_2' | 'step_3' | 'step_4';

interface ProgressStepsProps {
  className?: string;
  step: Step;
}
export const ProgressSteps = memo(({ className, step }: ProgressStepsProps) => {
  const activeStep = parseInt(step.split('_')[1], 10);

  return (
    <section className={classNames(styles.component, className)}>
      <div className={styles.container}>
        <ul className={styles.stages}>
          {progressStages.map((item, index) => (
            <li
              className={classNames(styles.stage, {
                [styles.active]: activeStep > index,
              })}
              key={item.title}
            >
              <div className={styles.step}>{item.step}</div>
              <span className={styles.title}>{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
});
ProgressSteps.displayName = 'ProgressSteps';
