import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { RouteServices, setCount, setRoutes } from '@entities/routes';
import { useAppDispatch } from '@shared/lib/hooks/useReduxHooks';
import {
  TicketFormState,
  initialState,
  setTicketForm,
} from '../model/slice/ticketFormSlice';

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

  const onSubmit = async (data: TicketFormState) => {
    dispatch(setTicketForm(data));
    if (data.from && data.to) {
      const response = await RouteServices.getRoutes({
        from_city_id: data.from.id,
        to_city_id: data.to.id,
        date_start: data.departureDate.split('T')[0],
        date_end: data.returnDate.split('T')[0],
      });

      dispatch(setRoutes(response.items));
      dispatch(setCount(response.total_count));

      if (location.pathname !== '/train') {
        navigate('./train');
      }
    }
  };

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
