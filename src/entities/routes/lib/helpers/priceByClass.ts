import { type SeatsPrice } from '@shared/types/direction';

export const priceByClass = {
  first: (price_info: SeatsPrice) => price_info.price,
  second: ({ bottom_price, top_price }: SeatsPrice) =>
    Math.min(bottom_price || 0, top_price || 0),
  third: ({ bottom_price, top_price, side_price }: SeatsPrice) =>
    Math.min(bottom_price || 0, top_price || 0, side_price || 0),
  fourth: (price_info: SeatsPrice) => price_info.price,
};
