import { memo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import classNames from 'classnames';
import { CustomInput } from '@shared/ui/CustomInput';
import { initialValues } from '../../model/consts/initialValues';
import { paymentPersonSchema } from '../../model/schema/paymentPerson.schema';
import styles from './PaymentPersonForm.module.scss';

interface PaymentPersonFormProps {
  className?: string;
}
export const PaymentPersonForm = memo(
  ({ className }: PaymentPersonFormProps) => {
    const {
      register,
      handleSubmit,
      formState: { errors, isValid },
    } = useForm({
      defaultValues: initialValues,
      resolver: zodResolver(paymentPersonSchema),
    });

    const { lastName, firstName, middleName, phone, email } = errors;

    const onSubmit = () => {
      console.log('work');
    };

    return (
      <form
        className={classNames(styles.component, className)}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={styles.name_wrapper}>
          <CustomInput
            id='lastName'
            label='Фамилия'
            placeholder='Фамилия'
            {...register('lastName')}
            error={!!lastName}
          />
          {!isValid && <p>{errors.lastName?.message}</p>}

          <CustomInput
            id='firstName'
            label='Имя'
            placeholder='Имя'
            {...register('firstName')}
            error={!!firstName}
          />
          <CustomInput
            id='middleName'
            label='Отчество'
            placeholder='Отчество'
            {...register('middleName')}
            error={!!middleName}
          />
        </div>

        <div className={styles.contact}>
          <CustomInput
            id='phone'
            label='Контактный телефон'
            placeholder='+7 __ __ __ __'
            {...register('phone')}
            error={!!phone}
          />
          <CustomInput
            id='email'
            label='E-mail'
            placeholder='inbox@gmail.ru'
            {...register('email')}
            error={!!email}
          />
        </div>
      </form>
    );
  },
);
PaymentPersonForm.displayName = 'PaymentPersonForm';
