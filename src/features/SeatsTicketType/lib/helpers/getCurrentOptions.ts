import { v4 as uuidv4 } from 'uuid';

interface Option {
  value: string;
  id: string;
  disabled?: boolean;
}

export const adultOptions = Array.from({ length: 4 }, (_, index) => ({
  value: (index + 1).toString(),
  id: uuidv4(),
}));

export const childOptions = Array.from({ length: 4 }, (_, index) => ({
  value: (index + 1).toString(),
  id: uuidv4(),
}));

export const childWithoutSeat = Array.from({ length: 2 }, (_, index) => ({
  value: (index + 1).toString(),
  id: uuidv4(),
  disabled: true,
}));

const getUpdatedAdultChildOptions = (
  options: Option[],
  currentCount: number,
  availableCountPassenger: number,
) =>
  options.map((item) =>
    Number(item.value) <= currentCount + availableCountPassenger
      ? { ...item, disabled: false }
      : { ...item, disabled: true },
  );

const getUpdatedChildWithoutSeatOptions = (
  childWithoutSeatOptions: Option[],
  currentCount: number,
  availableCountPassenger: number,
  adultCount: number,
) => {
  if (!adultCount) {
    return childWithoutSeat;
  }

  return childWithoutSeatOptions.map((item) => {
    if (
      adultCount <= 2 &&
      Number(item.value) <= currentCount + availableCountPassenger
    ) {
      return Number(item.value) > adultCount
        ? { ...item, disabled: true }
        : { ...item, disabled: false };
    }

    return Number(item.value) <= currentCount + availableCountPassenger
      ? { ...item, disabled: false }
      : { ...item, disabled: true };
  });
};

export const getCurrentOptions = (
  {
    adultOptions,
    childOptions,
    childWithoutSeat,
  }: {
    adultOptions: Option[];
    childOptions: Option[];
    childWithoutSeat: Option[];
  },
  {
    adult,
    child,
    childdWithoutSeat,
  }: { adult: number; child: number; childdWithoutSeat: number },
) => {
  const maxPassengers = 4;
  const availableCountPassenger =
    maxPassengers - (adult + child + childdWithoutSeat);
  const updatedAdultOptions = getUpdatedAdultChildOptions(
    adultOptions,
    adult,
    availableCountPassenger,
  );
  const updatedChildOptions = getUpdatedAdultChildOptions(
    childOptions,
    child,
    availableCountPassenger,
  );
  const updatedChildWithoutSeatOptions = getUpdatedChildWithoutSeatOptions(
    childWithoutSeat,
    childdWithoutSeat,
    availableCountPassenger,
    adult,
  );
  return {
    adultOptions: updatedAdultOptions,
    childOptions: updatedChildOptions,
    childWithoutSeat: updatedChildWithoutSeatOptions,
  };
};
