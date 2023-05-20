import { AuthData } from '../../types/Auth';

export interface IAuthStorage {
  save: (data: AuthData) => Promise<void>;
  get: () => Promise<AuthData>;
  remove: () => Promise<void>;
}