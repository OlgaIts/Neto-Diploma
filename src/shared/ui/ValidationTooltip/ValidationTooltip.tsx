import { memo } from 'react';
import classNames from 'classnames';
import styles from './ValidationTooltip.module.scss';
import { Icon } from '../Icon';

interface ValidationTooltipProps {
  className?: string;
  message: string;
  isValid?: boolean;
}

export const ValidationTooltip = memo(
  ({ className, message, isValid }: ValidationTooltipProps) => {
    return (
      <div
        className={classNames(className, styles.component, {
          [styles.valid]: isValid,
          [styles.not_valid]: !isValid,
        })}
      >
        {isValid ? (
          <>
            <div className={styles.icon_wrapper}>
              <Icon
                iconName='icon-check'
                className={styles.icon_valid}
                fontSize='12px'
              />
            </div>
            <p className={styles.text}>{message}</p>
          </>
        ) : (
          <>
            <div className={styles.icon_wrapper}>
              <Icon
                iconName='icon-close'
                className={styles.icon_not_valid}
                fontSize='12px'
              />
            </div>
            <p className={styles.text}>{message}</p>
          </>
        )}
      </div>
    );
  },
);

ValidationTooltip.displayName = 'ValidationTooltip';
