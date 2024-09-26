interface Seat {
  index: number;
  available: boolean;
}

export interface Seats {
  name: string;
  class_type: 'first' | 'second';
  have_first_class: boolean;
  have_second_class: boolean;
  have_third_class: boolean;
  have_fourth_class: boolean;
  have_wifi: boolean;
  have_air_conditioning: boolean;
  have_express: boolean;
  price: number;
  top_price: number;
  bottom_price: number;
  side_price: number;
  linens_price: number;
  wifi_price: number;
  avaliable_seats: number;
  is_linens_included: boolean;
  seats: Seat[];
}
