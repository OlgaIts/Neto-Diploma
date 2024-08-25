import { url } from '@shared/consts';

export const services = {
  getCities: async (name: string) => {
    const response = await fetch(`${url}/routes/cities?name=${name}`);
    const data = await response.json();
    return data;
  },
};
