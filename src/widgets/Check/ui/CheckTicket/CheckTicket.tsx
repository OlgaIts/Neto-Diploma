import { memo } from 'react';
import { SendDataButton } from '@features/SendPaymentData';
import { CheckTrain } from '../CheckTrain/CheckTrain';
import { CheckPassenger } from '../CheckPassenger/CheckPassenger';
import { CheckPay } from '../CheckPay/CheckPay';
import styles from './CheckTicket.module.scss';

export const CheckTicket = memo(() => {
  return (
    <section className={styles.section}>
      <CheckTrain />
      <CheckPassenger />
      <CheckPay />
      <SendDataButton />
    </section>
  );
});

CheckTicket.displayName = 'CheckTicket';
