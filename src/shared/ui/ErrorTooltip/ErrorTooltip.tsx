import { memo } from 'react';
import classNames from 'classnames';
import styles from './ErrorTooltip.module.scss';

interface ErrorTooltipProps {
  className?: string;
  message: string;
}

//TODO: ValidationTooltip
export const ErrorTooltip = memo(
  ({ className, message }: ErrorTooltipProps) => {
    return (
      <div className={classNames(styles.component, className)}>{message}</div>
    );
  },
);
ErrorTooltip.displayName = 'ErrorTooltip';
