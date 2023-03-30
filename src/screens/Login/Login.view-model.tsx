import { useState } from 'react';
import useErrors from '../../hooks/useErrors';
import isEmailValid from '../../utils/isEmailValid';

export interface LoginViewModelProps {
  email: string;
  handleEmailChange: (text: string) => void;
  getErrorMessageByFieldName: (fieldName: string) => string | undefined;
}

export function LoginViewModel() {
  const [email, setEmail] = useState('');

  const { errors, getErrorMessageByFieldName, removeError, setError } =
    useErrors();

  function handleEmailChange(text: string) {
    setEmail(text);

    if (text && !isEmailValid(text)) {
      return setError({ field: 'email', message: 'E-mail inválido' });
    } else {
      removeError('email');
    }
  }

  return {
    email,
    handleEmailChange,
    getErrorMessageByFieldName,
  };
}
