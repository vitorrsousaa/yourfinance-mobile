import React, { createContext, ReactNode, useEffect, useState } from 'react';

import { User } from '../types/User';
import AuthService from '../service/AuthService';
import APIError from '../errors/APIErrors';
import { api } from '../service/api';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  authenticated: boolean;
  loading: boolean;
  handleLogin: (user: User) => Promise<void>;
  handleLogout: () => Promise<void>;
  user: User;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export function AuthProvider({ children }: AuthContextProviderProps) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User>({});

  useEffect(() => {
    loadStorageData();
  }, []);

  async function loadStorageData(): Promise<void> {
    const authDataSerialized = await AsyncStorage.getItem('@auth');

    const authData: User = JSON.parse(authDataSerialized || '');

    if (!authData.token) {
      setAuthenticated(false);
      setLoading(false);
      return;
    }

    const { token, ...user } = authData;

    setUser(user);

    api.defaults.headers.Authorization = `Bearer ${token}`;

    try {
      setLoading(true);

      await AuthService.auth();

      setAuthenticated(true);
    } catch (error) {
      console.log('Desculpa, tivemos um problema. Tente novamente mais tarde.');

      handleLogout();
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin(user: User) {
    try {
      const data = await AuthService.login(user);

      AsyncStorage.setItem('@auth', JSON.stringify(data));

      api.defaults.headers.Authorization = `Bearer ${data.token}`;

      setUser(data);
      setAuthenticated(true);
    } catch (error: any) {
      Alert.alert(error.message);
      if (error instanceof APIError) {
        console.log('Email ou senha inválido');
        throw new Error('Not Authorized');
      }

      console.log('não conseguimos fazer login');
    }
  }

  async function handleRegister(user: User) {
    try {
      const data = await AuthService.register(user);

      localStorage.setItem('@Aion-token', JSON.stringify(data.token));
      localStorage.setItem('@Aion-user', JSON.stringify(data.user.name));
      api.defaults.headers.Authorization = `Bearer ${data.token}`;

      setUser({ name: data.user.name });
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
    setUser({});
    await AsyncStorage.removeItem('@auth');

    api.defaults.headers.Authorization = null;
  }

  return (
    <AuthContext.Provider
      value={{ authenticated, handleLogin, handleLogout, user, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
