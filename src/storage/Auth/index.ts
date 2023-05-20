import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthData } from '../../types/Auth';
import validateObject from '../../utils/validateObject';
import { USER_COLLECTION } from '../storageConfig';

import { IAuthStorage } from './IAuthStorage';

class AuthStorage implements IAuthStorage {
  async save(data: AuthData): Promise<void> {
    const validateItem = validateObject<AuthData>(data, ['access', 'user']);

    await AsyncStorage.setItem(USER_COLLECTION, JSON.stringify(validateItem));
  }

  async get(): Promise<AuthData> {
    const data = await AsyncStorage.getItem(USER_COLLECTION);

    const authData: AuthData = JSON.parse(data || '{}');

    const validate = validateObject<AuthData>(authData, ['access', 'user']);

    // Pensar em tratar com uma exceção

    return validate!;
  }

  async remove(): Promise<void> {
    await AsyncStorage.removeItem(USER_COLLECTION);
  }
}

export default new AuthStorage();
