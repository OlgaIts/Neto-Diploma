import { RouteProps } from 'react-router-dom';
import { StartPage } from '@pages/StartPage';
import { TrainPage } from '@pages/TrainPage';
import { PaymentPage } from '@pages/PaymentPage';
import { NotFound } from '@pages/NotFound';

export enum AppRoutes {
  HOME = 'home',
  TRAIN = 'train',
  PAYMENT = 'payment',
  NOT_FOUND = 'not_found',
  // '/routes/:id/seats'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.TRAIN]: '/train',
  [AppRoutes.PAYMENT]: '/payment',
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
  [AppRoutes.NOT_FOUND]: {
    element: <NotFound />,
    path: RoutePath.not_found,
  },
};
