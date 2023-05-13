import { AxiosRequestConfig, AxiosResponse } from 'axios';

import APIError from '../errors/APIErrors';
import delay from '../utils/delay';

import api from './api';

class HttpClient {
  private baseURL;

  constructor(baseURL = 'https://f14e-179-108-188-102.ngrok-free.app/api') {
    this.baseURL = baseURL;
  }

  get<T>(path: string) {
    return this.makeRequest<T>({
      method: 'get',
      url: `${this.baseURL}${path}`,
    });
  }

  delete<T>(path: string) {
    return this.makeRequest<T>({
      method: 'delete',
      url: `${this.baseURL}${path}`,
    });
  }

  post<T>(path: string, data: unknown) {
    console.log(this.baseURL);
    console.log('path', path);
    console.log(data);
    return this.makeRequest<T>({
      method: 'post',
      url: `${this.baseURL}${path}`,
      data,
    });
  }

  patch<T>(path: string, data: unknown) {
    return this.makeRequest<T>({
      method: 'patch',
      url: `${this.baseURL}${path}`,
      data,
    });
  }

  async makeRequest<T>(options: AxiosRequestConfig): Promise<T> {
    // await delay(1000);

    const response: AxiosResponse = await api({
      ...options,
      validateStatus: function (status) {
        return status >= 200 && status < 500;
      },
    });

    if (response.status >= 200 && response.status < 400) {
      return response.data as T;
    }

    throw new APIError(response);
  }
}

export default HttpClient;
