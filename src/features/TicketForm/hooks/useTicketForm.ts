import { useForm } from 'react-hook-form';
import {
  TicketFormState,
  initialState,
  setTicketForm,
} from '../model/slice/ticketFormSlice';
import { useAppDispatch } from '@shared/lib/hooks/useReduxHooks';

export const useTicketForm = () => {
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: initialState,
  });
  const dispatch = useAppDispatch();
  const fromCity = watch('from');
  const toCity = watch('to');
  const departureDate = watch('departureDate');
  const returnDate = watch('returnDate');

  const onSubmit = (data: TicketFormState) => {
    dispatch(setTicketForm(data));

    // запрос GET https://students.netoservices.ru/fe-diplom/routes
    // поиск направлений
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
