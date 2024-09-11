import { url } from '@shared/consts';

export const services = {
  getLastRoutes: async () => {
    const response = await fetch(`${url}/routes/last`);
    const data = await response.json();
    return data;
  },
};
