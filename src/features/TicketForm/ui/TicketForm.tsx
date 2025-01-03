import { memo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { registerLocale } from 'react-datepicker';
import { ru } from 'date-fns/locale';
import { format } from 'date-fns';
import { CitySelect } from '@features/CitySelect';
import { Title } from '@shared/ui/Title';
import { TransparentButton } from '@shared/ui/TransparentButton';
import { Icon } from '@shared/ui/Icon';
import { CustomDatePicker } from '@shared/ui/CustomDatePicker';
import { useAppDispatch } from '@shared/lib/hooks';
import { parseDate } from '@shared/lib/utils';
import { useTicketForm } from '../hooks/useTicketForm';
import { setFromCity, setToCity } from '../model/slice/ticketFormSlice';
import styles from './TicketForm.module.scss';

registerLocale('ru', ru);

interface TicketFormProps {
  className?: string;
}

export const TicketForm = memo(({ className }: TicketFormProps) => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const isMainPage = location.pathname === '/';
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    fromCityName,
    toCityName,
    onSubmit,
    returnDate,
    departureDate,
  } = useTicketForm();
  const [isRotated, setIsRotated] = useState(false);

  const handleSwitch = () => {
    setIsRotated(true);

    const fromCity = getValues('from');
    const toCity = getValues('to');

    if (fromCity && toCity) {
      setValue('from', toCity);
      setValue('to', fromCity);
    }
  };

  const handleFromCitySelect = (city: { id: string; name: string }) => {
    dispatch(setFromCity(city));
    setValue('from', city);
  };

  const handleToCitySelect = (city: { id: string; name: string }) => {
    dispatch(setToCity(city));
    setValue('to', city);
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
            className={classNames(styles.icon, { [styles.rotated]: isRotated })}
            onClick={handleSwitch}
            onAnimationEnd={() => setIsRotated(false)}
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
              setValue('date_start', date ? format(date, 'yyyy-MM-dd') : '')
            }
            selected={parseDate(departureDate)}
            localStorageKey='date_start'
          />

          <CustomDatePicker
            onChange={(date) =>
              setValue('date_end', date ? format(date, 'yyyy-MM-dd') : '')
            }
            selected={parseDate(returnDate)}
            localStorageKey='date_end'
          />
        </div>
        <TransparentButton
          size='big'
          tag='button'
          weight='bold'
          uppercase
          color='accent'
          type='submit'
          className={styles.btn}
        >
          найти билеты
        </TransparentButton>
      </div>
    </form>
  );
});

TicketForm.displayName = 'TicketForm';
