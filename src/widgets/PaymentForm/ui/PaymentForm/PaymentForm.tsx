import { memo } from 'react';
import {
  PaymentMethodForm,
  PaymentPersonForm,
} from '@features/PaymentPersonForm';
import { Title } from '@shared/ui/Title';
import { Button } from '@shared/ui/Button';
import { useAppDispatch } from '@shared/lib/hooks';
import styles from './PaymentForm.module.scss';

export const PaymentForm = memo(() => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <section className={styles.section}>
        <div className={styles.title_wrapper}>
          <Title color='dark' weight='regular'>
            Персональные данные
          </Title>
        </div>

        <PaymentPersonForm />
        <div className={styles.title_wrapper}>
          <Title color='dark' weight='regular'>
            Способ оплаты
          </Title>
        </div>
        <PaymentMethodForm />
      </section>
      <Button
        tag='Link'
        to='/check'
        color='white'
        bgColor='primary'
        type='submit'
        size='m'
        uppercase
        className={styles.btn}
        onClick={() => scroll(0, 600)}
      >
        купить билеты
      </Button>
    </div>
  );
});
PaymentForm.displayName = 'PaymentForm';