import { memo, ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';

import { RowView } from './Row.view';
import { RowViewModel } from './Row.view-model';

export interface RowProps extends TouchableOpacityProps {
  icon: ReactNode;
  title?: string;
  rightIcon?: ReactNode;
  children?: ReactNode;
  isLoading?: boolean;
}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface RowViewProps extends Omit<RowProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function Row(props: RowProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <RowView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = RowViewModel();

  return viewModel;
}

export default memo(Row);
