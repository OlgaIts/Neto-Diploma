import { parse } from 'date-fns';

export const parseDate = (dateString: string): Date | null => {
  return dateString
    ? parse(dateString.split('T')[0], 'yyyy-MM-dd', new Date())
    : null;
};
