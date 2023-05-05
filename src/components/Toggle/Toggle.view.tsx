import { ToggleViewModelProps } from './Toggle.view-model';
import { ToggleViewProps } from './Toggle';
import * as styled from './Toggle.styles';
import { Switch } from 'react-native';

interface Props {
  viewModel: ToggleViewModelProps;
  props: ToggleViewProps;
}

export function ToggleView({ viewModel, props }: Props) {
  const { ...toggleProps } = props;

  return (
    <styled.Toggle>
      <Switch {...toggleProps} />
    </styled.Toggle>
  );
}
