import { url } from '@shared/consts';

interface User {
  first_name: string;
  last_name: string;
  patronymic: string;
  phone: string;
  email: string;
  payment_method: 'cash' | 'online';
}

export interface Seat {
  coach_id: string;
  person_info: {
    is_adult: boolean;
    first_name: string;
    last_name: string;
    patronymic: string;
    gender: boolean;
    birthday: string;
    document_type: string;
    document_data: string;
  };
  seat_number: number;
  is_child: boolean;
  include_children_seat: boolean;
}

export interface OrderData {
  user: User;
  departure: {
    route_direction_id: string | undefined;
    seats: Seat[];
  };
  arrival?: {
    route_direction_id: string;
    seats: Seat[];
  };
}

export const services = {
  postOrderData: async (data: OrderData) => {
    const response = await fetch(`${url}/order`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return response.json();
  },
};

//TODO try catch
