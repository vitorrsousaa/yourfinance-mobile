import Icon from '../Icons';

import { TouchableViewProps } from './Touchable';
import * as styled from './Touchable.styles';
import { TouchableViewModelProps } from './Touchable.view-model';

interface Props {
  viewModel: TouchableViewModelProps;
  props: TouchableViewProps;
}

export function TouchableView({ viewModel, props }: Props) {
  const { background, item, color, ...touchableProps } = props;

  return (
    <styled.Touchable
      background={background}
      activeOpacity={0.6}
      {...touchableProps}
    >
      <Icon name={item} color={color} />
    </styled.Touchable>
  );
}
