import moment from 'moment';

export const formatDatetime = (time: number = 0) => {
  return moment.unix(time).format('HH:mm');
};
