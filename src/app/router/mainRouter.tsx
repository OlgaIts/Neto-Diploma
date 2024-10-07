import { ReactNode } from 'react';
import { StartPage } from '@pages/StartPage';
import { TrainPage } from '@pages/TrainPage';
import { PassengerPage } from '@pages/PassengerPage';
import { PaymentPage } from '@pages/PaymentPage';
import { SeatsPage } from '@pages/SeatsPage';
import { NotFound } from '@pages/NotFound';
import { Footer } from '@widgets/Footer';

const withFooter = (page: ReactNode) => (
  <>
    {page}
    <Footer />
  </>
);

export const mainRouter = () => {
  return [
    {
      path: '/',
      element: withFooter(<StartPage />),
    },
    {
      path: '/train',
      element: withFooter(<TrainPage />),
    },
    {
      path: '/payment',
      element: withFooter(<PaymentPage />),
    },
    {
      path: '/seats',
      element: withFooter(<SeatsPage />),
    },
    {
      path: '/passenger',
      element: withFooter(<PassengerPage />),
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ];
};
