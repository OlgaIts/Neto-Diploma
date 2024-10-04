interface SeatsImageProps {
  y: number;
  gap: (seatIndex: number) => number;
  width: number;
  height: number;
  seats: Array<number | null>;
}

export interface SeatsParams {
  [key: string]: SeatsImageProps;
}

const seatsInRow = 16;

const firstSeatsSizes = {
  startX: 133,
  width: 25,
  height: 58,
};

const secondSeatsSizes = {
  startX: 133,
  width: 25,
  height: 29,
};

const thirdSeadsSizes = {
  startX: 133,
  width: 25,
  height: 31,
  sideWidth: 42,
  sideHeight: 22,
};

const fourthSeatsSizes = {
  startX: 148,
  width: 25,
  height: 19,
};

const getRoomSeatsGap = (seatIndex: number) => {
  const startX = 133;
  if (seatIndex === 0) {
    return startX;
  }
  // четные места: расстояние до первого сидения (startX) + расстояние между сиденьями * (индекс сиденья / 2)
  // то есть для индекса 2: 133 + 1*88, для индекса 4: 133 + 2 * 88 и т.д.
  if (seatIndex % 2 == 0) {
    return startX + (seatIndex / 2) * 88;
  }

  // нечетные места: расстояние до первого сидения (startX) + расстояние прохода + расстояние между сиденьями * (индекс сиденья -1 / 2)
  // то есть для индекса 3: 133 + 59 + 1*88, для индекса 5: 133 + 2 * 88 и т.д.
  return startX + 59 + ((seatIndex - 1) / 2) * 88;
};

const getSideSeatsGap = (seatIndex: number) => {
  const startX = 133;
  if (seatIndex === 0) {
    return startX;
  }
  if (seatIndex % 2 == 0) {
    return startX + 88 + (seatIndex / 2 - 1) * 88;
  }

  return startX + 42 + ((seatIndex - 1) / 2) * 88;
};

const getFourthClassGap = (seatIndex: number) =>
  fourthSeatsSizes.startX + seatIndex * (18 + fourthSeatsSizes.width);

export const FirstClassSeatsParams: SeatsParams = {
  row1: {
    y: 30,
    gap: getRoomSeatsGap,
    seats: Array.from({ length: seatsInRow }, (v, i) => i + 1),
    width: firstSeatsSizes.width,
    height: firstSeatsSizes.height,
  },
};

export const SecondClassSeatsParams: SeatsParams = {
  row1: {
    y: 30,
    gap: getRoomSeatsGap,
    seats: Array.from({ length: seatsInRow }, (v, i) => 2 * (i + 1)),
    width: secondSeatsSizes.width,
    height: secondSeatsSizes.height,
  },
  row2: {
    y: 59,
    gap: getRoomSeatsGap,
    seats: Array.from({ length: seatsInRow }, (v, i) => 2 * i + 1),
    width: secondSeatsSizes.width,
    height: secondSeatsSizes.height,
  },
};

export const ThirdClassSeatsParams: SeatsParams = {
  row1: {
    y: 30,
    gap: getRoomSeatsGap,
    seats: Array.from({ length: seatsInRow }, (v, i) => i * 2 + 2),
    width: thirdSeadsSizes.width,
    height: thirdSeadsSizes.height,
  },
  row2: {
    y: 61,
    gap: getRoomSeatsGap,
    seats: Array.from({ length: seatsInRow }, (v, i) => i * 2 + 1),
    width: thirdSeadsSizes.width,
    height: thirdSeadsSizes.height,
  },
  row3: {
    y: 116,
    gap: getSideSeatsGap,
    seats: Array.from({ length: seatsInRow }, (v, i) => i * 1 + 33),
    width: thirdSeadsSizes.sideWidth,
    height: thirdSeadsSizes.sideHeight,
  },
};

export const FourthClassSeatsParams: SeatsParams = {
  row1: {
    y: 34,
    gap: getFourthClassGap,
    seats: Array.from({ length: seatsInRow }, (v, i) => i * 2 + 2),
    width: fourthSeatsSizes.width,
    height: fourthSeatsSizes.height,
  },
  row2: {
    y: 56,
    gap: getFourthClassGap,
    seats: Array.from({ length: seatsInRow }, (v, i) => i * 2 + 1),
    width: fourthSeatsSizes.width,
    height: fourthSeatsSizes.height,
  },
  row3: {
    y: 93,
    gap: getFourthClassGap,
    seats: Array.from({ length: seatsInRow }, (v, i) =>
      i === 0 || i === seatsInRow - 1 ? null : i * 2 + 32,
    ),
    width: fourthSeatsSizes.width,
    height: fourthSeatsSizes.height,
  },
  row4: {
    y: 115,
    gap: getFourthClassGap,
    seats: Array.from({ length: seatsInRow }, (v, i) =>
      i === seatsInRow - 1 ? 62 : i * 2 + 33,
    ),
    width: fourthSeatsSizes.width,
    height: fourthSeatsSizes.height,
  },
};
