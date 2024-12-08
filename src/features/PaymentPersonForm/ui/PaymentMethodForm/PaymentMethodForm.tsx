import { memo } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { paymentMethods } from '../../model/consts/paymentMethodList';
import { type PaymentPerson } from '../../types/paymentPerson';
import styles from './PaymentMethodForm.module.scss';

interface PaymentMethodFormProps {
  register: UseFormRegister<PaymentPerson>;
}

//TODO: стилизовать инпуты

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
            value='online'
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
            value='cash'
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
