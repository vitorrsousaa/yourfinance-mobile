import { UserRequest, UserResponse } from '../../types/User';

export interface IAuthService {
  login(user: UserRequest): Promise<UserResponse>;
  register(user: UserRequest): Promise<UserResponse>;
  refresh(): Promise<{ token: string }>;
}
