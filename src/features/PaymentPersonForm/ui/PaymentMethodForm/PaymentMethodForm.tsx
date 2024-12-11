import { memo } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { paymentMethods } from '../../model/consts/paymentMethodList';
import { type PaymentPerson } from '../../types/paymentPerson';
import styles from './PaymentMethodForm.module.scss';

interface PaymentMethodFormProps {
  register: UseFormRegister<PaymentPerson>;
}

export const PaymentMethodForm = memo(
  ({ register }: PaymentMethodFormProps) => {
    return (
      <>
        <div className={styles.wrapper_online}>
          <label htmlFor='online' className={styles.label}>
            Онлайн
          </label>
          <input
            className={styles.input}
            type='radio'
            id='online'
            value='online'
            {...register('payment_method')}
            defaultChecked
          />
          <ul className={styles.list}>
            {paymentMethods.map((item) => (
              <li key={item.id}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className={styles.img}
                  title={item.title}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.wrapper_cash}>
          <label htmlFor='cash' className={styles.label}>
            Наличными
          </label>
          <input
            className={styles.input}
            type='radio'
            id='cash'
            value='cash'
            {...register('payment_method')}
          />
        </div>
      </>
    );
  },
);
PaymentMethodForm.displayName = 'PaymentMethodForm';
