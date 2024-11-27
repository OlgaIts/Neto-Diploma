import { memo, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { GenderSwitch } from '@shared/ui/GenderSwitch';
import { CustomInput } from '@shared/ui/CustomInput';
import { Checkbox } from '@shared/ui/Checkbox';
import { DropdownButton } from '@shared/ui/DropdownButton';
import { Button } from '@shared/ui/Button';
import { useAppDispatch } from '@shared/lib/hooks';
import { savePassengers } from '../../model/slice/passengerInfoSlice';
import { PassengerFormSchema } from '../../model/schema/passengerForm.schema';
import { initialValues } from '../../model/consts/initialValues';
import { type Passenger } from '../../types/passenger';
import styles from './PassengerForm.module.scss';
import { ValidationTooltip } from '@shared/ui/ValidationTooltip/ValidationTooltip';

const wagonType = ['Взрослый', 'Детский'];
const pass = ['Паспорт РФ', 'Свидетельство о рождении'];

interface PassengerFormProps {
  id: number;
  openNextForm: () => void;
}

export const PassengerForm = memo(
  ({ id, openNextForm }: PassengerFormProps) => {
    const dispatch = useAppDispatch();
    const {
      register,
      handleSubmit,
      control,
      formState: { errors, isValid },
    } = useForm({
      defaultValues: initialValues,
      resolver: zodResolver(PassengerFormSchema),
    });
    const [changeDocument, setChangeDocument] = useState(pass[0]);
    const {
      lastName,
      firstName,
      middleName,
      birthday,
      passSeries,
      passNumber,
      birthNumber,
    } = errors;

    const handleChangeDocument = (value: string) => {
      setChangeDocument(value);
    };

    const onSubmit = (data: Passenger) => {
      dispatch(savePassengers({ id, passenger: data }));
      openNextForm();
    };

    return (
      <section className={styles.section}>
        <div className={styles.select_gender}>
          <Controller
            name='isAdult'
            control={control}
            render={({ field }) => (
              <DropdownButton list={wagonType} onChange={field.onChange} />
            )}
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.name_wrapper}>
            <CustomInput
              id='lastName'
              label='Фамилия'
              placeholder='Фамилия'
              {...register('lastName')}
              error={!!lastName}
            />
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

          <div className={styles.wrapper}>
            <Controller
              name='gender'
              control={control}
              render={({ field }) => (
                <GenderSwitch
                  className={styles.gender_wrapper}
                  onChange={field.onChange}
                />
              )}
            />

            <CustomInput
              id='birthday'
              label='Дата рождения'
              placeholder='ДД.ММ.ГГГГ'
              {...register('birthday')}
              error={!!birthday}
            />
          </div>

          <div className={styles.mobility_wrapper}>
            <Checkbox
              labelText='ограниченная подвижность'
              id='mobility'
              {...register('mobility')}
            />
          </div>

          <div className={styles.article}>
            <div className={styles.article_wrapper}>
              <div>
                <label className={styles.label} htmlFor='pass'>
                  Тип документа
                </label>

                <Controller
                  name='documentType'
                  control={control}
                  render={({ field }) => (
                    <DropdownButton
                      list={pass}
                      id='pass'
                      className={styles.pass}
                      onSelect={handleChangeDocument}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>

              <div className={styles.pass_wrapper}>
                {changeDocument === 'Паспорт РФ' && (
                  <div className={styles.pass_wrapper}>
                    <CustomInput
                      id='passSeries'
                      label='Серия'
                      placeholder='__ __ __ __'
                      {...register('passSeries')}
                      error={!!passSeries}
                    />
                    <CustomInput
                      id='passNumber'
                      label='Номер'
                      placeholder='__ __ __ __ __ __'
                      {...register('passNumber')}
                      error={!!passNumber}
                    />
                  </div>
                )}

                {changeDocument === 'Свидетельство о рождении' && (
                  <div>
                    <CustomInput
                      id='birthNumber'
                      label='Номер'
                      placeholder='12 символов'
                      {...register('birthNumber')}
                      error={!!birthNumber}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

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
        </form>
        {!isValid && (
          <ValidationTooltip
            message={
              lastName?.message ||
              passSeries?.message ||
              middleName?.message ||
              birthday?.message ||
              passSeries?.message ||
              passNumber?.message ||
              birthNumber?.message ||
              ''
            }
          />
        )}
        {isValid && <ValidationTooltip message='Готово' isValid={isValid} />}
      </section>
    );
  },
);
PassengerForm.displayName = 'PassengerForm';
