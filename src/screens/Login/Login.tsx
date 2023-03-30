import { memo } from 'react';

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

  const { setIsSubmitting, email, password, setPassword } = viewModel;

  // Precisa verificar inicialmente se o usuário esta logado e redirecionar para a página Home

  async function handleSubmit() {
    setIsSubmitting(true);

    const user = { email, password };

    try {
      // Executa a função para fazer login
    } catch (err) {
      setPassword('');
      // Informa apra o usuário que o email ou senha esta invalido
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
