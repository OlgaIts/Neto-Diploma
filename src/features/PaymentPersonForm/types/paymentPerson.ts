export interface PaymentPerson {
  firstName: string;
  lastName: string;
  middleName: string;
  phone: string;
  email: string;
  payment_method: 'cash' | 'online';
}
