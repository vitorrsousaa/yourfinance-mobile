import { memo } from 'react';

import { MyAccountView } from './MyAccount.view';
import { MyAccountViewModel } from './MyAccount.view-model';

export interface MyAccountProps {}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface MyAccountViewProps
    extends Omit<MyAccountProps, ''> {
// Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function MyAccount(props: MyAccountProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return (
      <MyAccountView viewModel={viewModel} props={viewProps} />
  );
}

export function useViewModel(){
  const viewModel = MyAccountViewModel()

  return viewModel;
}

export default memo(MyAccount);
