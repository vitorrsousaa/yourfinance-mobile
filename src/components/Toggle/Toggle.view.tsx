import { Switch } from 'react-native';

import { ToggleViewProps } from './Toggle';
import * as styled from './Toggle.styles';
import { ToggleViewModelProps } from './Toggle.view-model';

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
