import { PayloadAction } from '@reduxjs/toolkit';
import { type Direction } from './direction';

interface PayloadWithDirection<T> {
  direction: Direction;
  data: T;
}

export type PayloadActionDirection<T> = PayloadAction<PayloadWithDirection<T>>;
