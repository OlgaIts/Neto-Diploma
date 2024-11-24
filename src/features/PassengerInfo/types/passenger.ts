export interface Passenger {
  isAdult: boolean;
  firstName: string;
  lastName: string;
  middleName: string;
  gender: 'man' | 'woman';
  birthday: string;
  documentType: 'Паспорт РФ' | 'Свидетельство о рождении';
  passSeries: string;
  passNumber: string;
  birthNumber: string;
  mobility: boolean;
}
