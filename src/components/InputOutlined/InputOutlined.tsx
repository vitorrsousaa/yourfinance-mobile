import { memo } from 'react';
import { TextInputProps } from 'react-native';

import { InputOutlinedView } from './InputOutlined.view';
import { InputOutlinedViewModel } from './InputOutlined.view-model';

export interface InputProps extends TextInputProps {
  error?: string;
  border?: boolean;
  fixedHeight?: boolean;
}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface InputViewProps extends Omit<InputProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function InputOutlined(props: InputProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <InputOutlinedView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = InputOutlinedViewModel();

  return viewModel;
}

export default memo(InputOutlined);
