
import { MyAccountViewModelProps } from './MyAccount.view-model';
import { MyAccountViewProps } from './MyAccount';
import * as styled from './MyAccount.styles';
import { Text } from 'react-native';

interface Props {
  viewModel: MyAccountViewModelProps;
  props: MyAccountViewProps;
}

export function MyAccountView({ viewModel, props }: Props) {
  const { ...myAccountProps } = props;

  return (
    <styled.MyAccount>
      <Text>MyAccount</Text>
    </styled.MyAccount>
  );
}
