import { memo } from 'react';

import styles from './CheckTicket.module.scss';
import { CheckTrain } from '../CheckTrain/CheckTrain';
import { CheckPassenger } from '../CheckPassenger/CheckPassenger';
import { CheckPay } from '../CheckPay/CheckPay';
import { Button } from '@shared/ui/Button';

export const CheckTicket = memo(() => {
  return (
    <section className={styles.section}>
      <CheckTrain />
      <CheckPassenger />
      <CheckPay />
      <Button
        className={styles.btn}
        tag='Link'
        to='/confirm'
        color='white'
        size='m'
        bgColor='primary'
        uppercase
        onClick={() => scroll(0, 0)}
      >
        подтвердить
      </Button>
    </section>
  );
});

CheckTicket.displayName = 'CheckTicket';
