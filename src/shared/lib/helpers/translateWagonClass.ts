import { WagonClass } from '@entities/seats';

export const translateWagonClass = (wagonClass: WagonClass | undefined) => {
  if (wagonClass === 'first') {
    return 'Люкс';
  } else if (wagonClass === 'second') {
    return 'Купе';
  } else if (wagonClass === 'third') {
    return 'Плацкарт';
  } else {
    return 'Сидячей';
  }
};
