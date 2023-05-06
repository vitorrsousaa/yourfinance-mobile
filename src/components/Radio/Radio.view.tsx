import { RadioViewModelProps } from './Radio.view-model';
import { RadioViewProps } from './Radio';
import * as styled from './Radio.styles';
import Icon from '../Icons';

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
