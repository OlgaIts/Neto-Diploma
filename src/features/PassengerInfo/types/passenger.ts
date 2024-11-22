export interface Passenger {
  isAdult: boolean;
  firstName: string;
  lastName: string;
  middleName: string;
  isMan: boolean;
  birthday: string;
  documentType: 'Паспорт РФ' | 'Свидетельство о рождении';
  passSeries: string;
  passNumber: string;
  birthNumber: string;
}
