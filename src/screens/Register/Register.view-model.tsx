import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/useAuth';
import useErrors from '../../hooks/useErrors';
import { AuthRoutesNavigationProp } from '../../routes/public/auth.routes';
import isEmailValid from '../../utils/isEmailValid';

export interface RegisterViewModelProps {
  email: string;
  name: string;
  password: string;
  isFormValid: boolean;
  isSubmitting: boolean;
  handleEmailChange: (text: string) => void;
  handleNameChange: (text: string) => void;
  handlePasswordChange: (text: string) => void;
  getErrorMessageByFieldName: (fieldName: string) => string | undefined;
  navigateToLoginScreen: () => void;
  handleSubmit: () => Promise<void>;
}

export function RegisterViewModel() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { errors, getErrorMessageByFieldName, removeError, setError } =
    useErrors();

  const navigation = useNavigation<AuthRoutesNavigationProp>();

  const { handleRegister } = useAuth();

  const isFormValid = Boolean(password && email && name && errors.length === 0);

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

  function handleNameChange(text: string) {
    setName(text);

    if (!text) {
      setError({ field: 'name', message: 'Nome é obrigatório' });
    } else {
      removeError('name');
    }
  }

  function navigateToLoginScreen() {
    navigation.navigate('Login');
  }

  async function handleSubmit() {
    setIsSubmitting(true);
    const user = { name, email, password };

    try {
      await handleRegister(user);
    } catch (error) {
      console.log('Esse email já foi cadastrado');
      setPassword('');
    } finally {
      setIsSubmitting(false);
    }
  }

  return {
    email,
    password,
    isFormValid,
    name,
    isSubmitting,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    getErrorMessageByFieldName,
    navigateToLoginScreen,
    handleSubmit,
  };
}
