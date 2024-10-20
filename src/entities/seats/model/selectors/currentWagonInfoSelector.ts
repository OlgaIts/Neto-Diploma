import { RootState } from '@app/providers/StoreProvider/store';
import { type Direction } from '@shared/types';

export const getCurrentWagonInfo =
  (direction: Direction) => (state: RootState) =>
    state.currentWagonInfo[direction];

export const getCurrentServicesInfo =
  (direction: Direction) => (state: RootState) =>
    state.currentWagonInfo[direction]?.services;

export const getWagonList = (direction: Direction) => (state: RootState) =>
  state.currentWagonInfo[direction]?.wagonList;

export const getWagonClass = (direction: Direction) => (state: RootState) =>
  state.currentWagonInfo[direction]?.wagonClass;

export const getCurrentWagonSeats =
  (direction: Direction) => (state: RootState) =>
    state.currentWagonInfo[direction]?.seats;
