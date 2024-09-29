export {
  getDepartureSeats,
  getArrivalSeats,
  getDepartureInfo,
  getArrivalInfo,
  getSavedRouteFilters,
} from './model/selectors/selector';
export { useGetSeats } from './hooks/useGetSeats';
export {
  seatsReducer,
  setDeparture,
  setArrival,
} from './model/slice/seatsSlice';
