import { ChangeEvent, useEffect, useState } from 'react';
import { type Direction } from '@shared/types';
import {
  changePersonCount,
  getAdultCount,
  getChildCount,
  getChilddWithoutSeatCount,
  type PersonName,
} from '@entities/seats';
import {
  useAppDispatch,
  useAppSelector,
} from '@shared/lib/hooks/useReduxHooks';
import {
  adultOptions,
  childOptions,
  childWithoutSeat,
  getCurrentOptions,
} from '../helpers/getCurrentOptions';

export const usePersonCount = ({ direction }: { direction: Direction }) => {
  const dispatch = useAppDispatch();
  const adult = useAppSelector(getAdultCount(direction));
  const child = useAppSelector(getChildCount(direction));
  const childdWithoutSeat = useAppSelector(
    getChilddWithoutSeatCount(direction),
  );
  const [currentOptions, setCurrentOptions] = useState({
    adultOptions,
    childOptions,
    childWithoutSeat,
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
      adult,
      child,
      childdWithoutSeat,
    });
    setCurrentOptions(updatedOptions);
  }, [adult, child, childdWithoutSeat]);

  return {
    handleChange,
    adult,
    child,
    childdWithoutSeat,
    options: currentOptions,
  };
};
