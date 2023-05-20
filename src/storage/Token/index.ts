import AsyncStorage from '@react-native-async-storage/async-storage';

import { TOKEN_COLLECTION } from '../storageConfig';

import { ITokenStorage } from './ITokenStorage';

class TokenStorage implements ITokenStorage {
  async save(data: string): Promise<void> {
    await AsyncStorage.setItem(TOKEN_COLLECTION, JSON.stringify(data));
  }

  async get(): Promise<string> {
    const data = await AsyncStorage.getItem(TOKEN_COLLECTION);

    const refresh = JSON.parse(data || '');

    return refresh;
  }

  async remove(): Promise<void> {
    await AsyncStorage.removeItem(TOKEN_COLLECTION);
  }
}

export default new TokenStorage();
