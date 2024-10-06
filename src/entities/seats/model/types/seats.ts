interface Seat {
  index: number;
  available: boolean;
}

interface SeatsCount {
  top: number;
  bottom: number;
  side: number;
}
export interface Coach {
  _id: string;
  name: string;
  class_type: 'first' | 'second' | 'third' | 'fourth';
  have_first_class?: boolean;
  have_second_class?: boolean;
  have_third_class?: boolean;
  have_fourth_class?: boolean;
  have_wifi?: boolean;
  have_air_conditioning: boolean;
  have_express?: boolean;
  price: number;
  top_price: number;
  bottom_price: number;
  side_price?: number;
  linens_price: number;
  wifi_price: number;
  is_linens_included: boolean;
  train: string;
  available_seats: number;
  coachNumber?: number;
  seatsCount?: SeatsCount;
}
export interface Seats {
  coach: Coach;
  seats: Seat[];
}
