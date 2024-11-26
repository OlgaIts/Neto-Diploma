import { memo } from 'react';
import { Button } from '@shared/ui/Button';
import styles from './PaymentPageLink.module.scss';

export const PaymentPageLink = memo(() => {
  //TODO: условие, при котором кнопка будет активна или не активна

  return (
    <Button
      className={styles.btn}
      color='white'
      tag='Link'
      bgColor='primary'
      to='/payment'
      onClick={() => scroll(0, 0)}
    >
      Далее
    </Button>
  );
});

PaymentPageLink.displayName = 'PaymentPageLink';
