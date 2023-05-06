import Icon from '../Icons';

import { RadioViewProps } from './Radio';
import * as styled from './Radio.styles';
import { RadioViewModelProps } from './Radio.view-model';

interface Props {
  viewModel: RadioViewModelProps;
  props: RadioViewProps;
}

export function RadioView({ viewModel, props }: Props) {
  const { selected = false } = props;

  return (
    <styled.Radio selected={selected}>
      {selected && <Icon name="check" />}
    </styled.Radio>
  );
}
