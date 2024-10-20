import { ChangeEvent, memo } from 'react';
import { GenderSwitch } from '@shared/ui/GenderSwitch';
import { CustomInput } from '@shared/ui/CustomInput';
import { Checkbox } from '@shared/ui/Checkbox';
import { DropdownButton } from '@shared/ui/DropdownButton';
import { Button } from '@shared/ui/Button';
import { useAppDispatch } from '@shared/lib/hooks/useReduxHooks';
import { setBirthday, setFullName } from '../../model/slice/passengerInfoSlice';
import { PassInfoForm } from '../PassInfoForm/PassInfoForm';
import styles from './PassengerForm.module.scss';

const wagonType = ['Взрослый', 'Детский'];

export const PassengerForm = memo(() => {
  const dispatch = useAppDispatch();

  const fullNameChange =
    (id: 'lastName' | 'firstName' | 'middleName') =>
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(setFullName({ [id]: event.target.value }));
    };

  const birthdayChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setBirthday(event.target.value));
  };

  return (
    <section className={styles.section}>
      <div className={styles.select_gender}>
        <DropdownButton list={wagonType} />
      </div>

      <form className={styles.form}>
        <div className={styles.name_wrapper}>
          <CustomInput
            id='lastName'
            label='Фамилия'
            type='text'
            placeholder='Фамилия'
            onChange={fullNameChange('lastName')}
          />
          <CustomInput
            id='firstName'
            label='Имя'
            type='text'
            placeholder='Имя'
            onChange={fullNameChange('firstName')}
          />
          <CustomInput
            id='middleName'
            label='Отчество'
            type='text'
            placeholder='Отчество'
            onChange={fullNameChange('middleName')}
          />
        </div>

        <div className={styles.wrapper}>
          <GenderSwitch />
          <CustomInput
            id='birthday'
            label='Дата рождения'
            type='text'
            placeholder='ДД/ММ/ГГ'
            onChange={birthdayChange}
          />
        </div>

        <div className={styles.mobility_wrapper}>
          <Checkbox labelText='ограниченная подвижность' id='mobility' />
        </div>
      </form>
      <PassInfoForm />

      <Button className={styles.btn} color='black' tag='button' bgColor='light'>
        Следующий пассажир
      </Button>
    </section>
  );
});
PassengerForm.displayName = 'PassengerForm';
