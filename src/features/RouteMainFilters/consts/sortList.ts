import { RouteSortType } from '@entities/routes';
import { v4 as uuidv4 } from 'uuid';

export interface SortTypeItem {
  id: string;
  name: string;
  type: RouteSortType;
}

export const sortList: SortTypeItem[] = [
  { id: uuidv4(), name: 'времени', type: 'date' },
  { id: uuidv4(), name: 'стоимости', type: 'price_min' },
  { id: uuidv4(), name: 'длительности', type: 'duration' },
];
