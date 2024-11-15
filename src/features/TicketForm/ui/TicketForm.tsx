import { memo } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { registerLocale } from 'react-datepicker';
import { ru } from 'date-fns/locale';
import { useTicketForm } from '../hooks/useTicketForm';
import { setFromCity, setToCity } from '../model/slice/ticketFormSlice';
import { CitySelect } from '@entities/cities';
import { Title } from '@shared/ui/Title';
import { Button } from '@shared/ui/Button';
import { Icon } from '@shared/ui/Icon';
import { CustomDatePicker } from '@shared/ui/CustomDatePicker';
import { useAppDispatch } from '@shared/lib/hooks/useReduxHooks';
import styles from './TicketForm.module.scss';

registerLocale('ru', ru);

interface TicketFormProps {
  className?: string;
}

//TODO: поставить from и to 23 часа, либо, если from === 0 и to === 24, то не отправлять эти гет параметры, то есть вообще не отправлять! Либо косяк на бэкe, что там до 23, а на фронте до 24 (на фронте уходит 24)

export const TicketForm = memo(({ className }: TicketFormProps) => {
  const location = useLocation();
  const isMainPage = location.pathname === '/';
  const {
    register,
    handleSubmit,
    setValue,
    fromCityName,
    toCityName,
    onSubmit,
    returnDate,
    departureDate,
  } = useTicketForm();

  const dispatch = useAppDispatch();

  const handleFromCitySelect = (city: { id: string; name: string }) => {
    dispatch(setFromCity(city));
    setValue('from', city);
  };

  const handleToCitySelect = (city: { id: string; name: string }) => {
    dispatch(setToCity(city));
    setValue('to', city);
  };

  // Функция для преобразования строки в дату
  const parseDate = (dateString: string): Date | null => {
    return dateString ? new Date(dateString) : null;
  };

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
          <CitySelect
            placeholder='Откуда'
            register={register}
            name='from'
            cityName={fromCityName}
            onCitySelect={handleFromCitySelect}
          />
          <Icon
            iconName={'icon-arrow-loop'}
            color='grey'
            fontSize='16px'
            className={styles.icon}
            //TODO: дописать логику
            onClick={() => console.log('work')}
          />
          <CitySelect
            register={register}
            name={'to'}
            cityName={toCityName}
            placeholder='Куда'
            onCitySelect={handleToCitySelect}
          />
        </div>
      </div>

      <div className={styles.box}>
        <Title color='light' weight='light' className={styles.title}>
          Дата
        </Title>
        <div className={styles.input_wrapper}>
          <CustomDatePicker
            onChange={(date) =>
              setValue('departureDate', date ? date.toISOString() : '')
            }
            selected={parseDate(departureDate)}
          />

          <CustomDatePicker
            onChange={(date) =>
              setValue('returnDate', date ? date.toISOString() : '')
            }
            selected={parseDate(returnDate)}
          />
        </div>
        <Button
          tag='button'
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
