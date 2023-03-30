import { memo } from 'react';
import { TextInputProps } from 'react-native';

import { InputView } from './Input.view';
import { InputViewModel, InputViewModelProps } from './Input.view-model';

export interface InputProps extends TextInputProps {
  label: string;
  error?: string;
}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface InputViewProps extends Omit<InputProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function Input(props: InputProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <InputView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = InputViewModel();

  return viewModel;
}

export default memo(Input);
