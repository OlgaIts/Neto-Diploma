import { memo, useState } from 'react';
import { DropdownButton } from '@shared/ui/DropdownButton';
import { CustomInput } from '@shared/ui/CustomInput';
import { Passenger } from '@features/PassengerInfo/types/passenger';
import styles from './PassInfoForm.module.scss';
import { register } from 'react-scroll/modules/mixins/scroller';

const pass = ['Паспорт РФ', 'Свидетельство о рождении'];

type DocumentType = (typeof pass)[number];
const documentConfig: Record<
  DocumentType,
  { id: string; label: string; type: string; placeholder: string }[]
> = {
  'Паспорт РФ': [
    {
      id: 'passSeries',
      label: 'Серия',
      type: 'text',
      placeholder: '__ __ __ __',
    },
    {
      id: 'passNumber',
      label: 'Номер',
      type: 'text',
      placeholder: '__ __ __ __ __ __',
    },
  ],
  'Свидетельство о рождении': [
    {
      id: 'birthNumber',
      label: 'Номер',
      type: 'text',
      placeholder: '12 символов',
    },
  ],
};

interface PassInfoFormProps {
  formData: Passenger;
  onChange: (field: keyof Passenger, value: string) => void;
}

export const PassInfoForm = memo(
  ({ formData, onChange }: PassInfoFormProps) => {
    const [changeDocument, setChangeDocument] = useState(pass[0]);

    // const handleChangeDocument = (value: string) => {
    //   setChangeDocument(value);
    // };

    // const addValue = (value: string) => {
    //   dispatch(setDocumentType(value));
    // };

    // const handleInputChange = (id: string, value: string) => {
    //   const actionMap: Record<string, (value: string) => void> = {
    //     passSeries: (value) => dispatch(setPassSeries(value)),
    //     passNumber: (value) => dispatch(setPassNumber(value)),
    //     birthNumber: (value) => dispatch(setBirthNumber(value)),
    //   };

    //   actionMap[id]?.(value);
    // };

    const documentFields = documentConfig[formData.documentType];

    return (
      <article className={styles.component}>
        <div className={styles.wrapper}>
          <div>
            <label className={styles.label} htmlFor='pass'>
              Тип документа
            </label>
            <DropdownButton
              list={pass}
              id='pass'
              className={styles.pass}
              onSelect={}
            />
          </div>
          <div className={styles.pass_wrapper}>
            {documentFields &&
              documentFields.map(({ id, label, placeholder }) => (
                <CustomInput
                  key={id}
                  id={id}
                  label={label}
                  placeholder={placeholder}
                  // {...register('')}
                />
              ))}
            {changeDocument === 'Паспорт РФ' && (
              <div className={styles.pass_wrapper}>
                <CustomInput
                  id='passSeries'
                  label='Серия'
                  type='text'
                  placeholder='__ __ __ __'
                  onChange={onChange}
                />
                <CustomInput
                  id='passNumber'
                  label='Номер'
                  type='text'
                  placeholder='__ __ __ __ __ __'
                  onChange={onChange}
                />
              </div>
            )}

            {changeDocument === 'Свидетельство о рождении' && (
              <div>
                <CustomInput
                  id='birthNumber'
                  label='Номер'
                  type='text'
                  placeholder='12 символов'
                  onChange={}
                />
              </div>
            )}
          </div>
        </div>
      </article>
    );
  },
);
PassInfoForm.displayName = 'PassInfoForm';
