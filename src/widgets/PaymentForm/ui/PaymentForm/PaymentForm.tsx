import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  PaymentMethodForm,
  PaymentPersonForm,
  type PaymentPerson,
} from '@features/PaymentPersonForm';
import { getPaymentPerson, savePaymentPerson } from '@features/PassengerForm';
import { Title } from '@shared/ui/Title';
import { Button } from '@shared/ui/Button';
import { useAppDispatch, useAppSelector } from '@shared/lib/hooks';
import { paymentFormValues } from '../../model/consts/paymentFormValues';
import { paymentPersonSchema } from '../../model/schema/paymentPerson.schema';
import styles from './PaymentForm.module.scss';

export const PaymentForm = memo(() => {
  const dispatch = useAppDispatch();
  const paymentPerson = useAppSelector(getPaymentPerson);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: paymentPerson || paymentFormValues,
    resolver: zodResolver(paymentPersonSchema),
  });

  const onSubmit = (data: PaymentPerson) => {
    dispatch(savePaymentPerson(data));
    navigate('/check');
    scroll(0, 600);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.section}>
          <div className={styles.title_wrapper}>
            <Title color='dark' weight='regular'>
              Персональные данные
            </Title>
          </div>

          <article className={styles.person_wrapper}>
            <PaymentPersonForm
              errors={errors}
              register={register}
              isValid={isValid}
            />
          </article>

          <div className={styles.title_wrapper}>
            <Title color='dark' weight='regular'>
              Способ оплаты
            </Title>
          </div>

          <article className={styles.method_wrapper}>
            <PaymentMethodForm register={register} />
          </article>
        </div>
        <Button
          tag='Link'
          to='/check'
          color='white'
          bgColor='primary'
          type='submit'
          size='m'
          uppercase
          className={styles.btn}
          onClick={handleSubmit(onSubmit)}
        >
          купить билеты
        </Button>
      </form>
    </>
  );
});
PaymentForm.displayName = 'PaymentForm';
