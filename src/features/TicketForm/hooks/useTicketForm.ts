import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
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
  const departureDate = watch('departureDate');
  const returnDate = watch('returnDate');

  const onSubmit = async (data: TicketFormState) => {
    if (data.from && data.to) {
      dispatch(
        setRouteFilters({
          from_city_id: data.from.id,
          to_city_id: data.to.id,
          date_start: data.departureDate.split('T')[0],
          date_end: data.returnDate.split('T')[0],
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
    getValues,
    fromCityName: fromCity?.name || '',
    toCityName: toCity?.name || '',
    onSubmit,
    returnDate,
    departureDate,
  };
};
