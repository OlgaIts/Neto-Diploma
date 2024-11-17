import { WagonClass } from '../model/types/wagonClass';

export const withOneSeatType = (wagonClass: WagonClass) =>
  ['first', 'fourth'].includes(wagonClass);
