import AsyncStorage from '@react-native-async-storage/async-storage';
import { TOKEN_COLLECTION, USER_COLLECTION } from '../../storage/storageConfig';
import { setAuthorizationHeader } from './authorizationHeader';
import axios from 'axios';

type refreshToken = {
  token: string;
};

// Adicionar o axios puro aqui, e não utilizar a instância do axios que criei dentro de api

export async function refreshToken() {
  const tokenSerialized = await AsyncStorage.getItem(TOKEN_COLLECTION);

  const authDataSerialized = await AsyncStorage.getItem(USER_COLLECTION);

  const authData = JSON.parse(authDataSerialized || '{}');

  const refreshToken: string = JSON.parse(tokenSerialized || '');

  console.log('dentro da refreshToken');

  const data: refreshToken = await axios.post(
    'http://192.168.0.106:3001/api/auth/refresh',
    {},
    {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    }
  );

  const newAuthData = {
    token: data.token,
    user: authData.user,
  };

  await AsyncStorage.setItem(USER_COLLECTION, JSON.stringify(newAuthData));

  // setAuthorizationHeader(data.token);

  return data.token;
}
