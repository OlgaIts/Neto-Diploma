import { type Passenger } from '../../types/passenger';

export const initialValues: Passenger = {
  isAdult: true,
  firstName: '',
  lastName: '',
  middleName: '',
  gender: 'man',
  birthday: '',
  documentType: 'Паспорт РФ',
  passSeries: '',
  passNumber: '',
  birthNumber: '',
  mobility: false,
};
