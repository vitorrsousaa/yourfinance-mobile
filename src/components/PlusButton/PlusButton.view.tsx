import Touchable from '../Touchable';

import { PlusButtonViewProps } from './PlusButton';
import { PlusButtonViewModelProps } from './PlusButton.view-model';

interface Props {
  viewModel: PlusButtonViewModelProps;
  props: PlusButtonViewProps;
}

export function PlusButtonView({ viewModel, props }: Props) {
  const { ...plusButtonProps } = props;

  return (
    <Touchable
      item="plus"
      activeOpacity={0.9}
      style={{
        width: 64,
        height: 64,
        position: 'absolute',
        right: 24,
        bottom: 24,
      }}
      {...plusButtonProps}
    />
  );
}
