import { getPassengers, getPaymentPerson } from '@features/PassengerForm';
import {
  getArrivalInfo,
  getDepartureInfo,
  getTicketInfo,
  type DirectionTicketInfo,
} from '@entities/seats';
import { useAppSelector } from '@shared/lib/hooks';
import { services, type OrderData } from '../service/service';

const getDirectionTickets = (info: DirectionTicketInfo) =>
  Object.tsValues(info.coaches).reduce(
    (
      acc: {
        coach_id: string;
        seat_number: number;
        is_child: boolean;
        include_children_seat: boolean;
      }[],
      coach,
    ) => {
      Object.tsEntries(coach.tickets).map(([seatNumber, ticket]) => {
        acc.push({
          coach_id: coach.coachId,
          seat_number: seatNumber,
          is_child: ticket.isChildSeat,
          include_children_seat: false,
        });
      });
      return acc;
    },
    [],
  );

export const useSendOrderData = () => {
  const passengers = useAppSelector(getPassengers);
  const paymentPerson = useAppSelector(getPaymentPerson);
  const routeDepartureData = useAppSelector(getDepartureInfo);
  const routeArrivalData = useAppSelector(getArrivalInfo);
  const ticketDepartureInfo = useAppSelector(getTicketInfo('departure'));
  const ticketArrivalInfo = useAppSelector(getTicketInfo('arrival'));
  const departureTickets = getDirectionTickets(ticketDepartureInfo);
  const arrivalTickets = getDirectionTickets(ticketArrivalInfo);

  const passengersData = Object.tsValues(passengers).reduce(
    (acc: Omit<OrderData, 'user'>, user, index) => {
      if (!acc.departure && routeDepartureData) {
        acc.departure = {
          route_direction_id: routeDepartureData?._id,
          seats: [],
        };
      }

      if (!acc.arrival && routeArrivalData) {
        acc.arrival = {
          route_direction_id: routeArrivalData?._id,
          seats: [],
        };
      }

      if (departureTickets[index]) {
        // если количество билетов меньше количества пассажиров
        acc.departure.seats.push({
          ...departureTickets[index],
          person_info: {
            is_adult: user.ticketType === 'Взрослый',
            birthday: user.birthday,
            document_data:
              user.documentType === 'Паспорт РФ'
                ? `${user.passSeries} ${user.passNumber}`
                : user.birthNumber,
            document_type: user.documentType,
            first_name: user.firstName,
            gender: user.gender === 'man',
            last_name: user.lastName,
            patronymic: user.middleName,
          },
        });
      }
      if (arrivalTickets[index] && acc.arrival) {
        acc.arrival.seats.push({
          ...arrivalTickets[index],
          person_info: {
            is_adult: user.ticketType === 'Взрослый',
            birthday: user.birthday,
            document_data:
              user.documentType === 'Паспорт РФ'
                ? `${user.passSeries} ${user.passNumber}`
                : user.birthNumber,
            document_type: user.documentType,
            first_name: user.firstName,
            gender: user.gender === 'man',
            last_name: user.lastName,
            patronymic: user.middleName,
          },
        });
      }
      return acc;
    },
    {} as Omit<OrderData, 'user'>,
  );

  const postData = async () => {
    await services.postOrderData({
      user: {
        first_name: paymentPerson.firstName,
        last_name: paymentPerson.lastName,
        patronymic: paymentPerson.middleName,
        phone: paymentPerson.phone,
        email: paymentPerson.email,
        payment_method: paymentPerson.payment_method,
      },
      ...passengersData,
    });
  };

  return { postData };
};
