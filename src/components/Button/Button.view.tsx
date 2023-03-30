
import { ButtonViewModelProps } from './Button.view-model';
import { ButtonViewProps } from './Button';
import * as styled from './Button.styles';
import { Text } from 'react-native';



interface Props {
  viewModel: ButtonViewModelProps;
  props: ButtonViewProps;
}

export function ButtonView({ viewModel, props }: Props) {
  const { ...buttonProps } = props;

  return (
    <styled.Button>
      <Text>Button</Text>
    </styled.Button>
  );
}
