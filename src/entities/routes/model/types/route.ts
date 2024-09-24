import { BaseRoute, Direction } from '@shared/types';

export interface Route extends BaseRoute {
  departure: Direction;
  arrival?: Direction;
}
