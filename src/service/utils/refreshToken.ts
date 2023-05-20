import axios from 'axios';

import Auth from '../../storage/Auth';
import Token from '../../storage/Token';
import { AuthData } from '../../types/Auth';

type refreshToken = {
  token: string;
};

// Adicionar o axios puro aqui, e não utilizar a instância do axios que criei dentro de api

export async function refreshToken() {
  const refreshToken = await Token.get();

  const authData = await Auth.get();

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

  const newAuthData: AuthData = {
    access: data.token,
    user: authData.user,
  };

  await Auth.save(newAuthData);

  // setAuthorizationHeader(data.token);

  return data.token;
}
