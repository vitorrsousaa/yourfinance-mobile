import { TouchableViewModelProps } from './Touchable.view-model';
import { TouchableViewProps } from './Touchable';
import * as styled from './Touchable.styles';
import Icon from '../Icons';

interface Props {
  viewModel: TouchableViewModelProps;
  props: TouchableViewProps;
}

export function TouchableView({ viewModel, props }: Props) {
  const { background = 'black', item, ...touchableProps } = props;

  return (
    <styled.Touchable
      background={background}
      activeOpacity={0.6}
      {...touchableProps}
    >
      <Icon name={item} />
    </styled.Touchable>
  );
}
