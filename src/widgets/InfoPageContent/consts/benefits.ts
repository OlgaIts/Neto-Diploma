import { v4 as uuidv4 } from 'uuid';

export const benefits = [
  {
    id: uuidv4(),
    iconName: 'icon-Time',
    title: 'Моментальная покупка',
    text: 'Купить и оформить ЖД билеты на сайте можно всего за две минуты.',
  },
  {
    id: uuidv4(),
    iconName: 'icon-chair',
    title: 'Удобная схема вагонов',
    text: 'Выбирайте места в поездах дальнего следования на понятных схемах вагона.',
  },
  {
    id: uuidv4(),
    iconName: 'icon-registration',
    title: 'Электронная регистрация',
    text: 'Бронируйте ЖД билеты и регистрируйтесь на поезд онлайн.',
  },
  {
    id: uuidv4(),
    iconName: 'icon-promotion',
    title: 'Выгодные цены',
    text: 'ЖД билеты напрямую из системы. Следите за акциями и скидками.',
  },
];
