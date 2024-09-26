import { RouteProps } from 'react-router-dom';
import { StartPage } from '@pages/StartPage';
import { TrainPage } from '@pages/TrainPage';
import { PaymentPage } from '@pages/PaymentPage';
import { SeatsPage } from '@pages/SeatsPage';
import { PassengerPage } from '@pages/PassengerPage';
import { NotFound } from '@pages/NotFound';

export enum AppRoutes {
  HOME = 'home',
  TRAIN = 'train',
  PAYMENT = 'payment',
  SEATS = 'seats',
  PASSENGER = 'passenger',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.TRAIN]: '/train',
  [AppRoutes.PAYMENT]: '/payment',
  [AppRoutes.SEATS]: '/seats',
  [AppRoutes.PASSENGER]: '/passenger',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    element: <StartPage />,
    path: RoutePath.home,
  },
  [AppRoutes.TRAIN]: {
    element: <TrainPage />,
    path: RoutePath.train,
  },
  [AppRoutes.PAYMENT]: {
    element: <PaymentPage />,
    path: RoutePath.payment,
  },
  [AppRoutes.SEATS]: {
    element: <SeatsPage />,
    path: RoutePath.seats,
  },
  [AppRoutes.PASSENGER]: {
    element: <PassengerPage />,
    path: RoutePath.passenger,
  },
  [AppRoutes.NOT_FOUND]: {
    element: <NotFound />,
    path: RoutePath.not_found,
  },
};
