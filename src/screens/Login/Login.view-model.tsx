import { useState } from 'react';
import useErrors from '../../hooks/useErrors';
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
}

export function LoginViewModel() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { errors, getErrorMessageByFieldName, removeError, setError } =
    useErrors();

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
  };
}
