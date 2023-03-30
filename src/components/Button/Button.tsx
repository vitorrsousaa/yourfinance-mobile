import { memo } from 'react';

import { ButtonView } from './Button.view';
import { ButtonViewModel, ButtonViewModelProps } from './Button.view-model';

export interface ButtonProps {}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface ButtonViewProps
    extends Omit<ButtonProps, ''> {
// Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function Button(props: ButtonProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return (
      <ButtonView viewModel={viewModel} props={viewProps} />
  );
}

export function useViewModel(){
  const viewModel = ButtonViewModel()

  return viewModel;
}

export default memo(Button);
