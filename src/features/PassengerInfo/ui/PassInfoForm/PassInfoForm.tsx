import { memo, useState } from 'react';
import { useAppDispatch } from '@shared/lib/hooks/useReduxHooks';
import { DropdownButton } from '@shared/ui/DropdownButton';
import { CustomInput } from '@shared/ui/CustomInput';
import {
  setBirthNumber,
  setDocumentType,
  setPassNumber,
  setPassSeries,
} from '../../model/slice/passengerInfoSlice';
import styles from './PassInfoForm.module.scss';

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

export const PassInfoForm = memo(() => {
  const [changeDocument, setChangeDocument] = useState(pass[0]);
  const dispatch = useAppDispatch();

  const handleChangeDocument = (value: string) => {
    setChangeDocument(value);
  };

  const addValue = (value: string) => {
    dispatch(setDocumentType(value));
  };

  const handleInputChange = (id: string, value: string) => {
    const actionMap: Record<string, (value: string) => void> = {
      passSeries: (value) => dispatch(setPassSeries(value)),
      passNumber: (value) => dispatch(setPassNumber(value)),
      birthNumber: (value) => dispatch(setBirthNumber(value)),
    };

    actionMap[id]?.(value);
  };

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
            onSelect={handleChangeDocument}
            onChange={addValue}
          />
        </div>
        <div className={styles.pass_wrapper}>
          {documentConfig[changeDocument].map(
            ({ id, label, type, placeholder }) => (
              <CustomInput
                key={id}
                id={id}
                label={label}
                type={type}
                placeholder={placeholder}
                onChange={handleInputChange}
              />
            ),
          )}
        </div>
        {/* //TODO: переделать */}
        {/* {changeDocument === 'Паспорт РФ' && (
          <div className={styles.pass_wrapper}>
            <CustomInput
              id='passSeries'
              label='Серия'
              type='text'
              placeholder='__ __ __ __'
            />
            <CustomInput
              id='passNumber'
              label='Номер'
              type='text'
              placeholder='__ __ __ __ __ __'
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
            />
          </div>
        )} */}
      </div>
    </article>
  );
});
PassInfoForm.displayName = 'PassInfoForm';
