import moment from 'moment';
import 'moment/locale/ru';

export const formatDatetime = (time: number = 0) => {
  return moment(time).locale('ru').format('HH:mm');
};
