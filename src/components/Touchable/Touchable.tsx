import { memo } from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Icons } from '../Icons';

import { TouchableView } from './Touchable.view';
import { TouchableViewModel } from './Touchable.view-model';

export interface TouchableProps extends TouchableOpacityProps {
  item: Icons;
  background?: 'white' | 'black';
}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface TouchableViewProps extends Omit<TouchableProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

type DefaultProps = Pick<TouchableProps, 'background'>;
type Props = TouchableProps & DefaultProps;

const defaultProps: DefaultProps = {
  background: 'white',
};

function Touchable(props: Props) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <TouchableView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = TouchableViewModel();

  return viewModel;
}

Touchable.defaultProps = defaultProps;

export default memo(Touchable);
