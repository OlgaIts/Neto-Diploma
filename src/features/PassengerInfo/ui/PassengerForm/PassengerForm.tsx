import { memo, useState } from 'react';
import { GenderSwitch } from '@shared/ui/GenderSwitch';
import { CustomInput } from '@shared/ui/CustomInput';
import { Checkbox } from '@shared/ui/Checkbox';
import { DropdownButton } from '@shared/ui/DropdownButton';
import { Button } from '@shared/ui/Button';
import { useAppDispatch } from '@shared/lib/hooks';
import { type Passenger } from '@features/PassengerInfo/types/passenger';
import { PassInfoForm } from '../PassInfoForm/PassInfoForm';
import styles from './PassengerForm.module.scss';
import { savePassengers } from '@features/PassengerInfo/model/slice/passengerInfoSlice';
import { useForm } from 'react-hook-form';

const wagonType = ['Взрослый', 'Детский'];

const initialValues: Passenger = {
  isAdult: true,
  firstName: '',
  lastName: '',
  middleName: '',
  isMan: true,
  birthday: '',
  documentType: 'Паспорт РФ',
  passSeries: '',
  passNumber: '',
  birthNumber: '',
};

export const PassengerForm = memo(({ id }: { id: number }) => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({ defaultValues: initialValues });

  const onSubmit = (data: Passenger) => {
    dispatch(savePassengers({ id, passenger: data }));
    console.log(data);
  };

  return (
    <section className={styles.section}>
      <div className={styles.select_gender}>
        <DropdownButton list={wagonType} />
      </div>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.name_wrapper}>
          <CustomInput
            id='lastName'
            label='Фамилия'
            placeholder='Фамилия'
            {...register('lastName')}
          />
          <CustomInput id='firstName' label='Имя' placeholder='Имя' name='' />
          <CustomInput
            id='middleName'
            label='Отчество'
            placeholder='Отчество'
            {...register('middleName')}
          />
        </div>

        <div className={styles.wrapper}>
          <GenderSwitch />
          <CustomInput
            id='birthday'
            label='Дата рождения'
            placeholder='ДД/ММ/ГГ'
            {...register('birthday')}
          />
        </div>

        <div className={styles.mobility_wrapper}>
          <Checkbox labelText='ограниченная подвижность' id='mobility' />
        </div>
      </form>
      {/* <PassInfoForm formData={formData.documentType} onChange={handleChange} /> */}

      <Button
        className={styles.btn}
        color='black'
        tag='button'
        bgColor='light'
        type='submit'
        onClick={handleSubmit(onSubmit)}
      >
        Следующий пассажир
      </Button>
    </section>
  );
});
PassengerForm.displayName = 'PassengerForm';

// const handleChange = (field: keyof Passenger, value: string | boolean) => {
//   setFormData((prev) => ({
//     ...prev,
//     [field]: value,
//   }));
// };

// const handleSubmit = () => {
//   dispatch(savePassengers());
// };
