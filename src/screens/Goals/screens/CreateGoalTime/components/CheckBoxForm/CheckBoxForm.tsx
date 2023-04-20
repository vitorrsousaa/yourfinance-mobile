import { memo } from 'react';

import { CheckBoxFormView } from './CheckBoxForm.view';
import { CheckBoxFormViewModel } from './CheckBoxForm.view-model';

export type CheckBoxItem = {
  label: string;
  value: number;
};

export interface CheckBoxFormProps {
  data: CheckBoxItem[];
  onChange: (item: CheckBoxItem) => void;
  selected: number;
}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface CheckBoxFormViewProps extends Omit<CheckBoxFormProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function CheckBoxForm(props: CheckBoxFormProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <CheckBoxFormView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = CheckBoxFormViewModel();

  return viewModel;
}

export default memo(CheckBoxForm);
