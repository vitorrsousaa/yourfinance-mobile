import { memo } from 'react';

import { TouchableView } from './Touchable.view';
import { TouchableViewModel } from './Touchable.view-model';
import { TouchableOpacityProps } from 'react-native';
import { Icons } from '../Icons';

export interface TouchableProps extends TouchableOpacityProps {
  item: Icons;
  background?: 'white' | 'black';
}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface TouchableViewProps extends Omit<TouchableProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function Touchable(props: TouchableProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <TouchableView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = TouchableViewModel();

  return viewModel;
}

export default memo(Touchable);
