import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { CustomInput } from '@shared/ui/CustomInput';
import { type PaymentPerson } from '../../types/paymentPerson';
import styles from './PaymentPersonForm.module.scss';

interface PaymentPersonFormProps {
  errors: FieldErrors<PaymentPerson>;
  isValid: boolean;
  register: UseFormRegister<PaymentPerson>;
}
export const PaymentPersonForm = ({
  errors,
  isValid,
  register,
}: PaymentPersonFormProps) => {
  const lastNameError = errors?.lastName?.message;

  return (
    <>
      <div className={styles.name_wrapper}>
        <div>
          <CustomInput
            id='lastName'
            label='Фамилия'
            placeholder='Фамилия'
            {...register('lastName')}
            error={!!errors?.lastName}
          />
          {!isValid ? <p>{lastNameError}</p> : null}
        </div>

        <div>
          <CustomInput
            id='firstName'
            label='Имя'
            placeholder='Имя'
            {...register('firstName')}
            error={!!errors?.firstName}
          />
          {!isValid ? <p>{errors?.firstName?.message}</p> : ''}
        </div>

        <div>
          <CustomInput
            id='middleName'
            label='Отчество'
            placeholder='Отчество'
            {...register('middleName')}
            error={!!errors?.middleName}
          />
          {!isValid ? <p>{errors?.middleName?.message}</p> : ''}
        </div>
      </div>

      <div className={styles.contact}>
        <div>
          <CustomInput
            id='phone'
            label='Контактный телефон'
            placeholder='+7 __ __ __ __'
            {...register('phone')}
            error={!!errors?.phone}
          />
          {!isValid ? <p>{errors.phone?.message}</p> : ''}
        </div>
        <div>
          <CustomInput
            id='email'
            label='E-mail'
            placeholder='inbox@gmail.ru'
            {...register('email')}
            error={!!errors?.email}
          />
        </div>
      </div>
    </>
  );
};
