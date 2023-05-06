import { memo } from 'react';

import { useAuth } from '../../hooks/useAuth';

import { LoginView } from './Login.view';
import { LoginViewModel } from './Login.view-model';

export interface LoginProps {}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface LoginViewProps extends Omit<LoginProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
  handleSubmit: () => Promise<void>;
}

function Login(props: LoginProps) {
  const viewModel = useViewModel();
  const { handleLogin } = useAuth();

  const { setIsSubmitting, email, password, setPassword, setError } = viewModel;

  // Precisa verificar inicialmente se o usuário esta logado e redirecionar para a página Home

  async function handleSubmit() {
    setIsSubmitting(true);

    const user = { email, password };

    try {
      await handleLogin(user);
    } catch (err) {
      setPassword('');
      setError({ field: 'password', message: 'E-mail ou senha inválidos' });
    } finally {
      setIsSubmitting(false);
    }
  }

  const newProps = { ...props, handleSubmit };

  return <LoginView viewModel={viewModel} props={newProps} />;
}

export function useViewModel() {
  const viewModel = LoginViewModel();

  return viewModel;
}

export default memo(Login);
