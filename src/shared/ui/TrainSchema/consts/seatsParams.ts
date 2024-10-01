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
  startX: 136,
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

const seatsGap: { [key: number]: number } = {
  0: 0,
  1: 59, // 59
  2: 88, // 29
  3: 147, // 59
  4: 176, // 29
  5: 235, // 59
  6: 264, // 29
  7: 323, // 59
  8: 352, // 29
  9: 411, // 59
  10: 440, // 29
  11: 499, // 59
  12: 528, // 29
  13: 587, // 59
  14: 616, // 29
  15: 675, // 59
};

const getRoomSeatsGap = (seatIndex: number) => {
  //   if (seatIndex % 2 !== 0) {
  //     return firstSeatsSizes.startX + 89 * seatsGap[seatIndex - 2];
  //   }
  return firstSeatsSizes.startX + seatsGap[seatIndex];
};

const getFourthClassGap = (seatIndex: number) =>
  fourthSeatsSizes.startX + seatIndex * (18 + fourthSeatsSizes.width);

const getThirdClassGap = (seatIndex: number) =>
  thirdSeadsSizes.startX + seatsGap[seatIndex];

const getThirdSideGap = (seatIndex: number) =>
  thirdSeadsSizes.startX +
  seatIndex * thirdSeadsSizes.sideWidth +
  Math.floor(seatIndex / 2) * 4;

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
    gap: getThirdClassGap,
    seats: Array.from({ length: seatsInRow }, (v, i) => i * 2 + 2),
    width: thirdSeadsSizes.width,
    height: thirdSeadsSizes.height,
  },
  row2: {
    y: 61,
    gap: getThirdClassGap,
    seats: Array.from({ length: seatsInRow }, (v, i) => i * 2 + 1),
    width: thirdSeadsSizes.width,
    height: thirdSeadsSizes.height,
  },
  row3: {
    y: 116,
    gap: getThirdSideGap,
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
