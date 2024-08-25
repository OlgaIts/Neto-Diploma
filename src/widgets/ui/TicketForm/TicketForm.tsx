import { memo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import DatePicker from 'react-datepicker';
import { CitySelect } from '@entities/cities';
import { Title } from '@shared/ui/Title';
import { Button } from '@shared/ui/Button';
import { Icon } from '@shared/ui/Icon';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './TicketForm.module.scss';

interface TicketFormProps {
  className?: string;
}
export const TicketForm = memo(({ className }: TicketFormProps) => {
  const { register, handleSubmit, setValue, watch } = useForm();
  const location = useLocation();
  const isMainPage = location.pathname === '/';
  const fromCityName = watch('from');
  const toCityName = watch('to');
  const onSubmit = () => {
    console.log('data');
  };

  //TODO: datepicker
  const departureDate = watch('departureDate');
  const returnDate = watch('returnDate');

  useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type),
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={classNames(
        styles.form,
        className,
        !isMainPage ? styles.form_flex : '',
      )}
    >
      <div className={styles.box}>
        <Title color='light' weight='light' className={styles.title}>
          Направление
        </Title>
        <div className={styles.input_wrapper}>
          {/* <input
            list='citys'
            className={styles.input}
            id='from'
            placeholder='Откуда'
            type='text'
            {...register('from')}
          /> */}

          <CitySelect
            register={register}
            name={'from'}
            cityName={fromCityName}
          />

          <Icon
            iconName={'icon-arrow-loop'}
            color='grey'
            fontSize='16px'
            className={styles.icon}
            onClick={() => console.log('work')}
          />
          {/* <input
            className={styles.input}
            id='to'
            placeholder='Куда'
            type='text'
            {...register('to')}
          /> */}
          <CitySelect register={register} name={'to'} cityName={toCityName} />
        </div>
      </div>

      <div className={styles.box}>
        <Title color='light' weight='light' className={styles.title}>
          Дата
        </Title>
        <div className={styles.input_wrapper}>
          <DatePicker
            selected={departureDate}
            onChange={(date) => setValue('departureDate', date)}
            dateFormat='dd/MM/yyyy'
            placeholderText='ДД/ММ/ГГ'
            className={styles.input}
          />
          <DatePicker
            selected={returnDate}
            onChange={(date) => setValue('returnDate', date)}
            dateFormat='dd/MM/yyyy'
            placeholderText='ДД/ММ/ГГ'
            className={styles.input}
          />
        </div>
        <Button
          tag='Link'
          to='/train'
          color='black'
          bgColor='primary'
          uppercase
          size='m'
          type='submit'
          className={styles.btn}
        >
          найти билеты
        </Button>
      </div>
    </form>
  );
});
TicketForm.displayName = 'TicketForm';
