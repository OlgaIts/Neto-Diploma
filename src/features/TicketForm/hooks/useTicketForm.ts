import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { setRouteFilters } from '@entities/routes';
import {
  getRouteDateEnd,
  getRouteDateStart,
} from '@entities/routes/model/selectors/selector';
import {
  useAppDispatch,
  useAppSelector,
} from '@shared/lib/hooks/useReduxHooks';
import { TicketFormState, initialState } from '../model/slice/ticketFormSlice';

export const useTicketForm = () => {
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: initialState,
  });
  const dispatch = useAppDispatch();
  const fromCity = watch('from');
  const toCity = watch('to');
  const departureDate = watch('departureDate');
  const returnDate = watch('returnDate');
  const location = useLocation();
  const navigate = useNavigate();

  const dateStart = useAppSelector(getRouteDateStart); // следит за изменением поля date_start в фильтре редакса
  const dateEnd = useAppSelector(getRouteDateEnd);

  const onSubmit = async (data: TicketFormState) => {
    if (data.from && data.to) {
      dispatch(
        setRouteFilters({
          from_city_id: data.from.id,
          to_city_id: data.to.id,
          date_start: data.departureDate.split('T')[0],
          date_end_arrival: data.returnDate.split('T')[0],
        }),
      );

      if (location.pathname !== '/train') {
        navigate('./train');
      }
    }
  };

  // при изменении date_start, который получает useAppSelector, меняет значение departureDate в стейте формы
  useEffect(() => {
    if (dateStart) {
      setValue('departureDate', dateStart);
    }
  }, [dateStart]);

  useEffect(() => {
    if (dateEnd) {
      setValue('returnDate', dateEnd);
    }
  }, [dateEnd]);

  return {
    register,
    handleSubmit,
    setValue,
    fromCityName: fromCity?.name || '',
    toCityName: toCity?.name || '',
    onSubmit,
    returnDate,
    departureDate,
  };
};
