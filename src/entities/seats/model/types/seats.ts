interface Seat {
  index: number;
  available: boolean;
}

export interface Coach {
  _id: string;
  name: string;
  class_type: 'first' | 'second' | 'third' | 'fourth';
  have_wifi?: boolean;
  have_air_conditioning: boolean;
  price: number;
  top_price: number;
  bottom_price: number;
  side_price?: number;
  linens_price: number;
  wifi_price: number;
  is_linens_included: boolean;
  train: string;
  available_seats: number;
}
export interface Seats {
  coach: Coach;
  seats: Seat[];
}
