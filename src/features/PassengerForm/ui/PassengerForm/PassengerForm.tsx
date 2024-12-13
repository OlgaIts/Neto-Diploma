import { memo, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { GenderSwitch } from '@shared/ui/GenderSwitch';
import { CustomInput } from '@shared/ui/CustomInput';
import { Checkbox } from '@shared/ui/Checkbox';
import { DropdownButton } from '@shared/ui/DropdownButton';
import { Button } from '@shared/ui/Button';
import { useAppDispatch } from '@shared/lib/hooks';
import { ValidationTooltip } from '@shared/ui/ValidationTooltip';
import { savePassengers } from '../../model/slice/passengerInfoSlice';
import { PassengerFormSchema } from '../../model/schema/passengerForm.schema';
import { initialValues } from '../../model/consts/initialValues';
import { type Passenger } from '../../types/passenger';
import styles from './PassengerForm.module.scss';

const ticketType = ['Взрослый', 'Детский'];
const pass = ['Паспорт РФ', 'Свидетельство о рождении'];

interface PassengerFormProps {
  id: number;
  openNextForm: () => void;
  passenger?: Passenger;
}

export const PassengerForm = memo(
  ({ id, openNextForm, passenger }: PassengerFormProps) => {
    const dispatch = useAppDispatch();

    const {
      register,
      handleSubmit,
      control,
      formState: { errors, isValid },
    } = useForm({
      defaultValues: passenger || initialValues,
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
            name='ticketType'
            control={control}
            render={({ field }) => (
              <DropdownButton list={ticketType} onChange={field.onChange} />
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
            <GenderSwitch
              prefix={id}
              {...register('gender')}
              className={styles.gender_wrapper}
            />

            {/* //TODO: сделать проверку на взрослый и детский тип билета */}
            {/* {isAdult ? ( */}
            <CustomInput
              id='birthday'
              label='Дата рождения'
              placeholder='ДД.ММ.ГГГГ'
              {...register('birthday')}
              error={!!birthday}
            />
            {/* ) : (
              <CustomInput
                id='childBirthday'
                label='Дата рождения'
                placeholder='ДД.ММ.ГГГГ'
                {...register('childBirthday')}
                error={!!childBirthday}
              />
            )} */}
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
                      placeholder='VIII-ЫП-123456'
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
        {Object.tsKeys(errors).length > 0 && (
          <ValidationTooltip
            isValid={false}
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

        {isValid && <ValidationTooltip message={'Готово!'} isValid={true} />}
      </section>
    );
  },
);
PassengerForm.displayName = 'PassengerForm';
