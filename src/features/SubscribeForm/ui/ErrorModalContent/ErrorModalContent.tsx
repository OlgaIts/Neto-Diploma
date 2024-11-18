import { memo } from 'react';
import { Icon } from '@shared/ui/Icon';
import styles from './ErrorModalContent.module.scss';

interface ErrorModalContentProps {
  errorMessage: string;
}

export const ErrorModalContent = memo(
  ({ errorMessage }: ErrorModalContentProps) => {
    return (
      <div className={styles.component}>
        <Icon iconName='icon-mail-error' fontSize='50px' color='accent' />
        <p className={styles.error}>{errorMessage}</p>
      </div>
    );
  },
);
ErrorModalContent.displayName = 'ErrorModalContent';
