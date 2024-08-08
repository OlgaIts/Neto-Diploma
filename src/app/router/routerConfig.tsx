import { RouteProps } from 'react-router-dom';
import { StartPage } from '@pages/StartPage';
import { TrainPage } from '@pages/TrainPage';

export enum AppRoutes {
  HOME = 'home',
  TRAIN = 'train',
  //   NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.TRAIN]: '/train',
  //   [AppRoutes.NOT_FOUND]: "*",
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
  //   [AppRoutes.NOT_FOUND]: {
  //     element: <NotFound />,
  //     path: RoutePath.not_found,
  //   },
};
