import { PlusButtonViewModelProps } from './PlusButton.view-model';
import { PlusButtonViewProps } from './PlusButton';
import Touchable from '../Touchable';

interface Props {
  viewModel: PlusButtonViewModelProps;
  props: PlusButtonViewProps;
}

export function PlusButtonView({ viewModel, props }: Props) {
  const { ...plusButtonProps } = props;

  return (
    <Touchable
      item="plus"
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
