import { memo } from 'react';
import { PickerProps } from '@react-native-picker/picker';

import { SelectView } from './Select.view';
import { SelectViewModel } from './Select.view-model';

export interface SelectProps extends PickerProps {
  placeholder?: string;
  data: SelectOptions[];
  isLoading?: boolean;
  disabled?: boolean;
}

export type SelectOptions = {
  label: string;
  value: string;
};

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface SelectViewProps extends Omit<SelectProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function Select(props: SelectProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <SelectView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = SelectViewModel();

  return viewModel;
}

export default memo(Select);
