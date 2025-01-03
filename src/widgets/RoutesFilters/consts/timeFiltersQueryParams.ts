import { type RouteDirection } from '@features/RoundTripTime/types/RouteDirection';

export interface TimeFiltersQueryParams {
  departure: RouteDirection;
  arrival: RouteDirection;
}

export const timeFiltersQueryParams: TimeFiltersQueryParams = {
  departure: {
    from: {
      start: 'start_departure_hour_from',
      end: 'end_departure_hour_from',
    },
    to: {
      start: 'start_departure_hour_to',
      end: 'end_departure_hour_to',
    },
  },
  arrival: {
    from: {
      start: 'start_arrival_hour_from',
      end: 'end_arrival_hour_from',
    },
    to: {
      start: 'start_arrival_hour_to',
      end: 'end_arrival_hour_to',
    },
  },
};
