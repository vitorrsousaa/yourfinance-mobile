import axios, { AxiosInstance } from 'axios';

import { refreshToken } from './utils/refreshToken';

const api: AxiosInstance = axios.create();

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log('dentro do interceptor');

    if (error.response.status === 401) {
      throw new Error('Unauthorized');
    }

    throw error;
  }
);

console.log(api.interceptors.response);

export default api;
