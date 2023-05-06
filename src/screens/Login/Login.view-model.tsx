import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import useErrors from '../../hooks/useErrors';
import { AuthRoutesNavigationProp } from '../../routes/public/auth.routes';
import isEmailValid from '../../utils/isEmailValid';

export interface LoginViewModelProps {
  email: string;
  password: string;
  isFormValid: boolean | '';
  isSubmitting: boolean;
  handleEmailChange: (text: string) => void;
  handlePasswordChange: (text: string) => void;
  getErrorMessageByFieldName: (fieldName: string) => string | undefined;
  setPassword: (password: string) => void;
  setIsSubmitting: (state: boolean) => void;
  setError: ({ field, message }: { field: string; message: string }) => void;
  navigateToRegisterScreen: () => void;
}

export function LoginViewModel() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { errors, getErrorMessageByFieldName, removeError, setError } =
    useErrors();

  const navigation = useNavigation<AuthRoutesNavigationProp>();

  const isFormValid = password && email && errors.length === 0;

  function handleEmailChange(text: string) {
    setEmail(text);

    if (text && !isEmailValid(text)) {
      return setError({ field: 'email', message: 'E-mail inválido' });
    } else {
      removeError('email');
    }
  }

  function handlePasswordChange(text: string) {
    setPassword(text);

    if (!text) {
      setError({ field: 'password', message: 'Senha é obrigatória' });
    } else {
      removeError('password');
    }
  }

  function navigateToRegisterScreen() {
    navigation.navigate('Register');
  }

  return {
    email,
    password,
    isFormValid,
    isSubmitting,
    handleEmailChange,
    handlePasswordChange,
    getErrorMessageByFieldName,
    setPassword,
    setIsSubmitting,
    setError,
    navigateToRegisterScreen,
  };
}
