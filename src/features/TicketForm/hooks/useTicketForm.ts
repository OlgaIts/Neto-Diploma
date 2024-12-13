import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';
import {
  getRouteDateEnd,
  getRouteDateStart,
  setRouteFilters,
} from '@entities/routes';
import { useAppDispatch, useAppSelector } from '@shared/lib/hooks';
import { TicketFormState, initialState } from '../model/slice/ticketFormSlice';

export const useTicketForm = () => {
  const dispatch = useAppDispatch();
  const dateStart = useAppSelector(getRouteDateStart); // следит за изменением поля date_start в фильтре редакса
  const dateEnd = useAppSelector(getRouteDateEnd);
  const location = useLocation();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, getValues, watch } = useForm({
    defaultValues: initialState,
  });
  const fromCity = watch('from');
  const toCity = watch('to');
  const departureDate = watch('date_start');
  const returnDate = watch('date_end');

  const onSubmit = async (data: TicketFormState) => {
    if (data.from && data.to) {
      const date_start =
        data.date_start && format(data.date_start, 'yyyy-MM-dd');
      const date_end = data.date_end && format(data.date_end, 'yyyy-MM-dd');
      localStorage.setItem('date_start', date_start);
      localStorage.setItem('date_end', date_end);

      dispatch(
        setRouteFilters({
          from_city_id: data.from.id,
          to_city_id: data.to.id,
          date_start,
          date_end,
        }),
      );

      if (location.pathname !== '/train') {
        navigate('./train');
      }
    }
  };

  // при изменении date_start, который получает useAppSelector, меняет значение date_start в стейте формы
  useEffect(() => {
    if (dateStart) {
      setValue('date_start', dateStart);
    }
  }, [dateStart]);

  useEffect(() => {
    if (dateEnd) {
      setValue('date_end', dateEnd);
    }
  }, [dateEnd]);

  return {
    register,
    handleSubmit,
    setValue,
    getValues,
    fromCityName: fromCity?.name || '',
    toCityName: toCity?.name || '',
    onSubmit,
    returnDate,
    departureDate,
  };
};
