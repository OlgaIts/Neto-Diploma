import { useEffect, useState } from 'react';
import { services } from '@entities/lastRoutes/model/services/service';

export const useGetLastRoute = () => {
  const [lastRoutes, setLastRoutes] = useState([]);

  const getLastRoutes = async () => {
    const data = await services.getLastRoutes();
    setLastRoutes(data);
  };

  useEffect(() => {
    getLastRoutes();
  }, []);

  return { lastRoutes };
};
