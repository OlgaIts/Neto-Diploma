import { memo } from 'react';
import { paymentMethods } from '../../model/consts/paymentMethodList';
import styles from './PaymentMethodForm.module.scss';

interface PaymentMethodFormProps {
  register: any;
}

export const PaymentMethodForm = memo(
  ({ register }: PaymentMethodFormProps) => {
    return (
      <>
        <div className={styles.wrapper_online}>
          <label htmlFor='online'>Онлайн</label>
          <input
            type='radio'
            id='online'
            {...register('payment_method')}
            value='Онлайн'
            defaultChecked
          />
          {/* <Checkbox
            id='online'
            labelText='Онлайн'
            {...register('payment_method')}
          /> */}
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
          <label htmlFor='cash'>Наличными</label>
          <input
            type='radio'
            {...register('payment_method')}
            id='cash'
            value='Наличными'
          />
          {/* <Checkbox
            id='cash'
            labelText='Наличными'
            {...register('payment_method')}
          /> */}
        </div>
      </>
    );
  },
);
PaymentMethodForm.displayName = 'PaymentMethodForm';
