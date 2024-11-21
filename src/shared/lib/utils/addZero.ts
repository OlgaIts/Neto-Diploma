export const addZero = (number?: number) => {
  if (number === undefined) {
    return;
  }
  if (number < 10) {
    return `0${number}`;
  }
  return number;
};
