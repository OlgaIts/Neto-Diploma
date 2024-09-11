interface DirectionInfo {
  railway_station_name: string;
  city: {
    _id: string;
    name: string;
  };
  datetime: number;
}

interface SeatsPrice {
  top_price?: number;
  bottom_price?: number;
  side_price?: number;
}

interface BaseRoute {
  have_first_class: boolean;
  have_second_class: boolean;
  have_third_class: boolean;
  have_fourth_class: boolean;
  have_wifi: boolean;
  have_air_conditioning: boolean;
  is_express: boolean;
  min_price: number;
  available_seats: number;
  available_seats_info: {
    fourth?: number;
    third?: number;
    second?: number;
    first?: number;
  };
}

interface Direction extends BaseRoute {
  _id: string;
  duration: number;
  train: {
    _id: string;
    name: string;
  };

  from: DirectionInfo;
  to: DirectionInfo;

  price_info: {
    first?: SeatsPrice;
    second?: SeatsPrice;
    third?: SeatsPrice;
    fourth?: SeatsPrice;
  };
}

export interface Route extends BaseRoute {
  departure: Direction;
  arrival?: Direction;
}
