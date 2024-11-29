import { type Passenger } from '../../types/passenger';

export const initialValues: Passenger = {
  ticketType: 'Взрослый',
  firstName: '',
  lastName: '',
  middleName: '',
  gender: 'man',
  // adultBirthday: '',
  // childBirthday: '',
  birthday: '',
  documentType: 'Паспорт РФ',
  passSeries: '',
  passNumber: '',
  birthNumber: '',
  mobility: false,
};
