import React, { createContext, ReactNode, useEffect, useState } from 'react';

import { User } from '../types/User';
import AuthService from '../service/AuthService';
import APIError from '../errors/APIErrors';
import { api } from '../service/api';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER_COLLECTION } from '../storage/storageConfig';

interface AuthContextProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  authenticated: boolean;
  loading: boolean;
  handleLogin: (user: User) => Promise<void>;
  handleLogout: () => Promise<void>;
  auth: AuthData;
}

interface AuthData {
  token: string;
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
    const authDataSerialized = await AsyncStorage.getItem(USER_COLLECTION);

    const authData = JSON.parse(authDataSerialized || '{}');

    if (!authData.token) {
      setAuthenticated(false);
      setLoading(false);
      handleLogout();
      return;
    }

    const { token, ...user } = authData;

    setAuth(authData);

    api.defaults.headers.Authorization = `Bearer ${token}`;

    try {
      setLoading(true);

      await AuthService.auth();

      setAuthenticated(true);
    } catch (error) {
      handleLogout();
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin(user: User) {
    try {
      const data = await AuthService.login(user);

      AsyncStorage.setItem(USER_COLLECTION, JSON.stringify(data));

      api.defaults.headers.Authorization = `Bearer ${data.token}`;

      setAuth(data);
      setAuthenticated(true);
    } catch (error: any) {
      if (error instanceof APIError) {
        throw new Error('Email ou senha inválido');
      }

      Alert.alert('Não conseguimos fazer login, tente novamnete mais tarde');
    }
  }

  async function handleRegister(user: User) {
    try {
      const data = await AuthService.register(user);

      localStorage.setItem(USER_COLLECTION, JSON.stringify(data));
      api.defaults.headers.Authorization = `Bearer ${data.token}`;

      setAuth(data);
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

    api.defaults.headers.Authorization = null;
  }

  return (
    <AuthContext.Provider
      value={{ authenticated, handleLogin, handleLogout, auth, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
