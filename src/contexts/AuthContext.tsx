import React, { createContext, ReactNode, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

import APIError from '../errors/APIErrors';
import AuthService from '../service/AuthService';
import {
  removeAuthorizationHeader,
  setAuthorizationHeader,
} from '../service/utils/authorizationHeader';
import { TOKEN_COLLECTION, USER_COLLECTION } from '../storage/storageConfig';
import { User } from '../types/User';

interface AuthContextProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  authenticated: boolean;
  loading: boolean;
  handleLogin: (user: User) => Promise<void>;
  handleRegister: (user: User) => Promise<void>;
  handleLogout: () => Promise<void>;
  auth: AuthData;
}

interface AuthData {
  access: string;
  user: User;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export function AuthProvider({ children }: AuthContextProviderProps) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState<AuthData>({} as AuthData);

  useEffect(() => {
    loadStorageData();
  }, []);

  async function loadStorageData(): Promise<void> {
    setLoading(true);
    const authDataSerialized = await AsyncStorage.getItem(USER_COLLECTION);

    const authData: AuthData = JSON.parse(authDataSerialized || '{}');

    if (!authData.access) {
      console.log('aqui dentro');
      setAuthenticated(false);
      setLoading(false);
      handleLogout();
      return;
    }

    const { access, ...user } = authData;

    setAuth(authData);

    setAuthorizationHeader(access);
    setAuthenticated(true);

    setLoading(false);

    // try {
    //   await TransactionsService.list();

    //   setAuthenticated(true);
    // } catch (error) {
    //   handleLogout();
    //   // setLoading(false);
    // } finally {
    //   setLoading(false);
    // }
  }

  async function handleLogin(user: User) {
    try {
      const data = await AuthService.login(user);

      const authData: AuthData = { user: data.user, access: data.token.access };

      await AsyncStorage.setItem(USER_COLLECTION, JSON.stringify(authData));
      setAuth(authData);

      setAuthorizationHeader(data.token.access);

      // Salvar o refresh Token
      await AsyncStorage.setItem(
        TOKEN_COLLECTION,
        JSON.stringify(data.token.refresh)
      );
      setAuthenticated(true);
    } catch (error: any) {
      if (error instanceof APIError) {
        Alert.alert('Email ou senha inválido');
        throw new Error('Email ou senha inválido');
      }

      Alert.alert('Não conseguimos fazer login, tente novamnete mais tarde');
    }
  }

  async function handleRegister(user: User) {
    // Ainda preciso atualizar essa função
    try {
      const data = await AuthService.register(user);

      const authData: AuthData = { user: data.user, access: data.token.access };

      await AsyncStorage.setItem(USER_COLLECTION, JSON.stringify(authData));

      setAuth(authData);

      setAuthorizationHeader(data.token.access);

      await AsyncStorage.setItem(
        TOKEN_COLLECTION,
        JSON.stringify(data.token.refresh)
      );

      setAuthenticated(true);
    } catch (error: any) {
      if (error instanceof APIError) {
        console.log('Email já cadastrado');
        throw new Error('Not Authorized');
      }

      console.log(
        'Não conseguimos cadastrar sua conta. Tente novamente mais tarde.'
      );
    }
  }

  async function handleLogout() {
    setAuthenticated(false);
    setAuth({} as AuthData);
    await AsyncStorage.removeItem(USER_COLLECTION);

    removeAuthorizationHeader();
  }

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        handleLogin,
        handleLogout,
        auth,
        handleRegister,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
