import { memo } from 'react';
import classNames from 'classnames';
import styles from './ValidationTooltip.module.scss';

interface ValidationTooltipProps {
  className?: string;
  message: string;
  isValid?: boolean;
}

export const ValidationTooltip = memo(
  ({ className, message, isValid }: ValidationTooltipProps) => {
    return (
      <div
        className={classNames(className, {
          [styles.valid]: isValid,
          [styles.not_valid]: !isValid,
        })}
      >
        <p className={styles.text}>{message}</p>
      </div>
    );
  },
);

ValidationTooltip.displayName = 'ValidationTooltip';
