import { type PersonSeatsCount } from '@entities/seats';

export interface Option {
  value: string;
  id: string;
  disabled?: boolean;
}

export interface PersonCountOptions {
  adultOptions: Option[];
  childOptions: Option[];
  childWithoutSeatOptions: Option[];
}

export const initialAdultOptions = Array.from({ length: 4 }, (_, index) => ({
  value: (index + 1).toString(),
}));

export const initialChildOptions = Array.from({ length: 4 }, (_, index) => ({
  value: (index + 1).toString(),
}));

export const initialChildWithoutSeatOptions = Array.from(
  { length: 2 },
  (_, index) => ({
    value: (index + 1).toString(),
    disabled: true,
  }),
);

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
): Option[] => {
  if (!adultCount) {
    return childWithoutSeatOptions.map((option) => ({
      ...option,
      disabled: true,
    }));
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
  options: PersonCountOptions,
  personCount: PersonSeatsCount,
): PersonCountOptions => {
  const { adultOptions, childOptions, childWithoutSeatOptions } = options;
  const { adultCount, childCount, childWithoutSeatCount } = personCount;
  const maxPassengers = 4;
  const availableCountPassenger =
    maxPassengers - (adultCount + childCount + childWithoutSeatCount);
  const updatedAdultOptions = getUpdatedAdultChildOptions(
    adultOptions,
    adultCount,
    availableCountPassenger,
  );
  const updatedChildOptions = getUpdatedAdultChildOptions(
    childOptions,
    childCount,
    availableCountPassenger,
  );
  const updatedChildWithoutSeatOptions = getUpdatedChildWithoutSeatOptions(
    childWithoutSeatOptions,
    childWithoutSeatCount,
    availableCountPassenger,
    adultCount,
  );
  return {
    adultOptions: updatedAdultOptions,
    childOptions: updatedChildOptions,
    childWithoutSeatOptions: updatedChildWithoutSeatOptions,
  };
};
