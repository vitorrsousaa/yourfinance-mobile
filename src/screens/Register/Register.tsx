import { memo } from 'react';

import { RegisterView } from './Register.view';
import { RegisterViewModel } from './Register.view-model';

export interface RegisterProps {}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface RegisterViewProps
    extends Omit<RegisterProps, ''> {
// Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function Register(props: RegisterProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return (
      <RegisterView viewModel={viewModel} props={viewProps} />
  );
}

export function useViewModel(){
  const viewModel = RegisterViewModel()

  return viewModel;
}

export default memo(Register);
