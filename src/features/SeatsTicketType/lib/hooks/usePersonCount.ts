import { ChangeEvent, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  changePersonCount,
  getAdultCount,
  getChildCount,
  getChildWithoutSeatCount,
  type PersonName,
} from '@entities/seats';
import { useAppDispatch, useAppSelector } from '@shared/lib/hooks';
import { type Direction } from '@shared/types';
import {
  initialAdultOptions,
  initialChildOptions,
  initialChildWithoutSeatOptions,
  getCurrentOptions,
  Option,
  PersonCountOptions,
} from '../helpers/getCurrentOptions';

const addId = (options: Omit<Option, 'id'>[]): Option[] =>
  options.map((option) => ({ ...option, id: uuidv4() }));

export const usePersonCount = ({ direction }: { direction: Direction }) => {
  const dispatch = useAppDispatch();
  const adultCount = useAppSelector(getAdultCount(direction));
  const childCount = useAppSelector(getChildCount(direction));
  const childWithoutSeatCount = useAppSelector(
    getChildWithoutSeatCount(direction),
  );

  const [currentOptions, setCurrentOptions] = useState<PersonCountOptions>({
    adultOptions: addId(initialAdultOptions),
    childOptions: addId(initialChildOptions),
    childWithoutSeatOptions: addId(initialChildWithoutSeatOptions),
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    if (['adult', 'child', 'childWithoutSeat'].includes(name)) {
      dispatch(
        changePersonCount({
          direction,
          personCount: Number(value),
          passengerCategory: name as PersonName,
        }),
      );
    }
  };

  useEffect(() => {
    const updatedOptions = getCurrentOptions(currentOptions, {
      adultCount,
      childCount,
      childWithoutSeatCount,
    });
    setCurrentOptions(updatedOptions);
  }, [adultCount, childCount, childWithoutSeatCount]);

  return {
    handleChange,
    adultCount,
    childCount,
    childWithoutSeatCount,
    options: currentOptions,
  };
};
