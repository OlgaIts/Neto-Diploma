import moment from 'moment';
import 'moment/locale/ru';

export const formatDate = (number: number) => {
  return moment.unix(number).format('DD.MM.YYYY');
};
