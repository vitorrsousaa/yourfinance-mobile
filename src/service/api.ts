import axios from 'axios';

import { refreshToken } from './utils/refreshToken';

const api = axios.create();

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log('dentro do interceptor');
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const token = await refreshToken();

        api.defaults.headers.Authorization = `Bearer ${token}`;

        return api(originalRequest);
      } catch (error) {
        console.log(error);

        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

// console.log(api.interceptors.response);

export default api;
