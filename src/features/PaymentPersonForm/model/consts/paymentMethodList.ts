import { v4 as uuidv4 } from 'uuid';
import cloudpayments from '@shared/assets/img/payment/Cloudpayments.png';
import masterCard from '@shared/assets/img/payment/MasterCard.png';
import visa from '@shared/assets/img/payment/Visa.png';
import payPal from '@shared/assets/img/payment/PayPal.png';
import mir from '@shared/assets/img/payment/Mir.png';
import sber from '@shared/assets/img/payment/SberPay.png';

export const paymentMethods = [
  {
    id: uuidv4(),
    alt: 'Cloudpayments',
    src: cloudpayments,
    title: 'CloudPayments',
  },
  {
    id: uuidv4(),
    alt: 'Master Card',
    src: masterCard,
    title: 'Master Card',
  },
  { id: uuidv4(), alt: 'Visa', src: visa, title: 'Visa' },
  { id: uuidv4(), alt: 'PayPal', src: payPal, title: 'PayPal' },
  { id: uuidv4(), alt: 'МИР', src: mir, title: 'МИР' },
  { id: uuidv4(), alt: 'Сбер', src: sber, title: 'Сбер' },
];
