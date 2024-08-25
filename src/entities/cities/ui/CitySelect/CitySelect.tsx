import classNames from 'classnames';
import { ChangeEvent, memo, useEffect, useState } from 'react';
import { Datalist } from '@shared/ui/Datalist';
import { services } from '@entities/cities/model/services/services';
import { City } from '@entities/cities/model/types/city';
import {
  FieldValues,
  RegisterOptions,
  UseFormRegisterReturn,
} from 'react-hook-form';
import styles from './CitySelect.module.scss';

interface CitySelectProps<T extends string> {
  className?: string;
  name: T;
  register: (
    name: T,
    options?: RegisterOptions<FieldValues, T>,
  ) => UseFormRegisterReturn<T>;
  cityName: string;
}
export const CitySelect = memo(
  <T extends string>({
    className,
    name,
    register,
    cityName,
  }: CitySelectProps<T>) => {
    const [cities, setCities] = useState([]);

    const getCities = async (value: string) => {
      const result = await services.getCities(value);
      const data = result || [];
      const citiesData = data.map((item: City) => ({
        id: item._id,
        value: item.name,
      }));
      setCities(citiesData);
    };

    useEffect(() => {
      if (cityName) {
        getCities(cityName);
      }
    }, [cityName]);

    return (
      <Datalist data={cities} listId={`${name}_cities`} {...register(name)}  />
    );
  },
);

CitySelect.displayName = 'CitySelect';
