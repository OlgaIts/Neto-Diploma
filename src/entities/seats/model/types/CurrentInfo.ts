import { type SpecificPlace } from '@shared/types';
import { type Options } from './serviceOptions';
import { type WagonClass } from './wagonClass';

export interface CurrentInfo {
  wagonNumber?: number;
  wagonId?: string;
  available_seats?: number;
  top?: number;
  side?: number;
  bottom?: number;
  top_price?: number;
  bottom_price?: number;
  side_price?: number;
  price?: number;
  services?: Record<string, Options>;
  wagonList?: number[];
  wagonClass: WagonClass;
  seats?: Record<number, SpecificPlace>;
}
