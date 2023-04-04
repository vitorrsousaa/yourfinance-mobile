import { TesteViewModelProps } from './Teste.view-model';
import { TesteViewProps } from './Teste';
import * as styled from './Teste.styles';
import { Text } from 'react-native';

interface Props {
  viewModel: TesteViewModelProps;
  props: TesteViewProps;
}

export function TesteView({ viewModel, props }: Props) {
  const { ...testeProps } = props;

  return (
    <styled.Teste>
      <Text>Teste</Text>
    </styled.Teste>
  );
}
