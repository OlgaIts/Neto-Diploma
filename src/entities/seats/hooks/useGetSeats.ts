import { useEffect } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '@shared/lib/hooks/useReduxHooks';
import { getArrivalInfo, getDepartureInfo } from '../model/selectors/selector';
import { services } from '../model/services/services';
import { setSeats } from '../model/slice/seatsSlice';

export const useGetSeats = () => {
  const departureInfo = useAppSelector(getDepartureInfo);
  const arrivalInfo = useAppSelector(getArrivalInfo);
  //селектор. появится SeatsFilters. кусок слайса из него фильтры передать в 16 строку
  const dispatch = useAppDispatch();

  const getSeats = async (id: string, direction: 'departure' | 'arrival') => {
    const response = await services.getSeats({ id, filters: {} });
    dispatch(setSeats({ direction, seats: response }));
  };

  useEffect(() => {
    if (departureInfo?.train._id) {
      getSeats(departureInfo?._id, 'departure');
    }
  }, [departureInfo]);

  useEffect(() => {
    if (arrivalInfo?.train._id) {
      getSeats(arrivalInfo._id, 'arrival');
    }
  }, [arrivalInfo]);
};
