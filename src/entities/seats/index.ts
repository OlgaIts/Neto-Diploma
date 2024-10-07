export { TrainSchema, type WagonClass } from './ui/TrainSchema/TrainSchema';
export { useGetCoachInfo } from './hooks/useGetCoachInfo';
export { CoachInfo } from './ui/CoachInfo/CoachInfo';
export { SeatsTicketTypeInput } from './ui/SeatsTicketTypeInput/SeatsTicketTypeInput';
export { RouteInfo } from './ui/RouteInfo/RouteInfo';
export { useGetSeats } from './hooks/useGetSeats';
export {
  setAdultCount,
  setChildCount,
  setChildWithoutSeatCount,
  setWagonClass,
  setCoachNumber,
  seatsTicketInfoReducer,
} from './model/slice/ticketInfoSlice';
export {
  getAdultCount,
  getChildCount,
  getChilddWithoutSeatCount,
  getArrivalTicket,
  getDepartureTicket,
} from './model/selectors/ticketInfoSelector';
export {
  getDepartureSeats,
  getArrivalSeats,
  getDepartureInfo,
  getArrivalInfo,
  getSavedRouteFilters,
} from './model/selectors/seatsSelector';
export {
  seatsReducer,
  setDeparture,
  setArrival,
  type SpecificPlace,
} from './model/slice/seatsSlice';
