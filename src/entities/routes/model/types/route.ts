import { BaseRoute, DirectionDetails } from '@shared/types';

export interface Route extends BaseRoute {
  departure: DirectionDetails;
  arrival?: DirectionDetails;
}
