import { memo } from 'react';

import { LoginView } from './Login.view';
import { LoginViewModel, LoginViewModelProps } from './Login.view-model';

export interface LoginProps {}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface LoginViewProps extends Omit<LoginProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function Login(props: LoginProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <LoginView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = LoginViewModel();

  return viewModel;
}

export default memo(Login);
