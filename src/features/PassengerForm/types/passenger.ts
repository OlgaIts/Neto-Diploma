export interface Passenger {
  ticketType: 'Взрослый' | 'Детский';
  firstName: string;
  lastName: string;
  middleName: string;
  gender: 'man' | 'woman';
  // adultBirthday: string;
  // childBirthday: string;
  birthday: string;
  documentType: 'Паспорт РФ' | 'Свидетельство о рождении';
  passSeries: string;
  passNumber: string;
  birthNumber: string;
  mobility: boolean;
}
