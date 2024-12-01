import { ChangeEvent, memo, useEffect, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Datalist, DatalistProps } from '@shared/ui/Datalist';
// TODO: проверь по архитектурным правилам
import { TicketFormState } from '@features/TicketForm/model/slice/ticketFormSlice';
import { services } from '../../model/services/services';
import { type City } from '../../model/types/city';

interface CitySelectProps<T extends string> extends Partial<DatalistProps> {
  name: keyof TicketFormState;
  register: (
    name: keyof TicketFormState,
  ) => ReturnType<UseFormRegister<TicketFormState>>;
  cityName: string;
  onCitySelect: (city: { id: string; name: string }) => void;
}
export const CitySelect = memo(
  <T extends string>({
    name,
    register,
    cityName,
    placeholder,
    onCitySelect,
  }: CitySelectProps<T>) => {
    const [cities, setCities] = useState<{ id: string; value: string }[]>([]);
    const [inputValue, setInputValue] = useState(cityName); // состояние для хранения введенного значения

    const getCities = async (value: string) => {
      const result = await services.getCities(value);
      // const data = result || [];
      const data = Array.isArray(result) ? result : [];
      const citiesData = data.map((item: City) => ({
        id: item._id,
        value: item.name,
      }));
      setCities(citiesData);
    };

    useEffect(() => {
      if (cityName) {
        getCities(cityName);
        setInputValue(cityName);
      }
    }, [cityName]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setInputValue(value);
      getCities(value);
    };

    const handleCitySelect = (event: ChangeEvent<HTMLInputElement>) => {
      const selectedCity = cities.find(
        (city) => city.value === event.target.value,
      );
      if (selectedCity) {
        setInputValue(selectedCity.value);
        onCitySelect({ id: selectedCity.id, name: selectedCity.value });
      }
    };

    return (
      <Datalist
        data={cities}
        listId={`${name}_cities`}
        {...register(name)}
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => {
          handleInputChange(e);
          handleCitySelect(e);
        }}
      />
    );
  },
);

CitySelect.displayName = 'CitySelect';
