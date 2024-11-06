import { ChangeEvent, useEffect, useState } from 'react';
import { type Direction } from '@shared/types';
import {
  getAdultCount,
  getChildCount,
  getChilddWithoutSeatCount,
} from '@entities/seats';
import {
  useAppDispatch,
  useAppSelector,
} from '@shared/lib/hooks/useReduxHooks';
import {
  PersonName,
  setPersonCount,
} from '@entities/seats/model/slice/ticketInfoSlice';
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
        setPersonCount({
          data: { value: Number(value), name: name as PersonName },
          direction,
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
