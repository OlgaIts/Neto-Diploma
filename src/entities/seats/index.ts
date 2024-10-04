export { seatsTicketTypeReducer } from './model/slice/ticketInfoSlice';
export { SeatsTicketTypeInput } from './ui/SeatsTicketTypeInput/SeatsTicketTypeInput';
export { RouteInfo } from './ui/RouteInfo/RouteInfo';
export { useGetSeats } from './hooks/useGetSeats';
export {
  setAdultCount,
  setChildCount,
  setChildWithoutSeatCount,
  setWagonClass,
} from './model/slice/ticketInfoSlice';
export {
  getAdultCount,
  getChildCount,
  getChilddWithoutSeatCount,
  getWagonClass,
} from './model/selectors/ticketInfoSelector';
export {
  getDepartureSeats,
  getArrivalSeats,
  getDepartureInfo,
  getArrivalInfo,
  getSavedRouteFilters,
} from './model/selectors/selector';
export {
  seatsReducer,
  setDeparture,
  setArrival,
} from './model/slice/seatsSlice';
