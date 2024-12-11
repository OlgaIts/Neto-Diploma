import { ReactNode } from 'react';
import { StartPage } from '@pages/StartPage';
import { InfoPage } from '@pages/InfoPage';
import { TrainPage } from '@pages/TrainPage';
import { SeatsPage } from '@pages/SeatsPage';
import { PassengerPage } from '@pages/PassengerPage';
import { PaymentPage } from '@pages/PaymentPage';
import { CheckPage } from '@pages/CheckPage';
import { ConfirmPage } from '@pages/ConfirmPage';
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
      path: '/info',
      element: withFooter(<InfoPage />),
    },
    {
      path: '/train',
      element: withFooter(<TrainPage />),
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
      path: '/payment',
      element: withFooter(<PaymentPage />),
    },
    {
      path: '/check',
      element: withFooter(<CheckPage />),
    },
    {
      path: '/confirm',
      element: withFooter(<ConfirmPage />),
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ];
};
