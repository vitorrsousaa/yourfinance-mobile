export interface User {
  name?: string;
  email?: string;
  password?: string;
  createdAt?: string;
  _id?: string;
  __v?: number;
  token?: string;
}

export interface UserRequest extends User {}

export interface UserResponse {
  token: string;
  user: User;
}
