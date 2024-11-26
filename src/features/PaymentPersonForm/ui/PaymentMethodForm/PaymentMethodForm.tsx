import { memo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import classNames from 'classnames';
import { Checkbox } from '@shared/ui/Checkbox';
import { initialValues } from '@features/PaymentPersonForm/model/consts/initialValues';
import { paymentMethods } from '../../model/consts/paymentMethodList';
import { paymentPersonSchema } from '@features/PaymentPersonForm/model/schema/paymentPerson.schema';
import styles from './PaymentMethodForm.module.scss';

interface PaymentMethodFormProps {
  className?: string;
}

export const PaymentMethodForm = memo(
  ({ className }: PaymentMethodFormProps) => {
    const { register, handleSubmit } = useForm({
      defaultValues: initialValues,
      resolver: zodResolver(paymentPersonSchema),
    });

    const onSubmit = () => {
      console.log('work');
    };

    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={classNames(styles.component, className)}
      >
        <div className={styles.wrapper_online}>
          <Checkbox
            id='online'
            labelText='Онлайн'
            {...register('payment_method')}
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
          <Checkbox
            id='cash'
            labelText='Наличными'
            {...register('payment_method')}
          />
        </div>
      </form>
    );
  },
);
PaymentMethodForm.displayName = 'PaymentMethodForm';
