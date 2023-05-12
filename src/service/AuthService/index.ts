import { UserRequest, UserResponse } from '../../types/User';
import HttpClient from '../HttpClient';

import { IAuthService } from './IAuthService';

class AuthService implements IAuthService {
  private httpClient;

  constructor() {
    this.httpClient = new HttpClient();
  }

  login(user: UserRequest) {
    return this.httpClient.post<UserResponse>('/auth/authenticate', user);
  }

  register(user: UserRequest) {
    return this.httpClient.post<UserResponse>('/auth/register', user);
  }

  refresh() {
    return this.httpClient.post<{ token: string }>('/refresh', {});
  }
}

export default new AuthService();
