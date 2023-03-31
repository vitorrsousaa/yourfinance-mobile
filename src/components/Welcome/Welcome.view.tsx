import { WelcomeViewModelProps } from './Welcome.view-model';
import { WelcomeViewProps } from './Welcome';
import * as styled from './Welcome.styles';
import { Text } from '../Text';

interface Props {
  viewModel: WelcomeViewModelProps;
  props: WelcomeViewProps;
}

export function WelcomeView({ viewModel, props }: Props) {
  const { ...welcomeProps } = props;

  return (
    <styled.Welcome>
      <Text color="#fff">Bem vindo(a)</Text>
      <Text size={32} weight="300" color="#fff">
        you
        <Text weight="700" size={32} color="#fff">
          Finance
        </Text>
      </Text>
    </styled.Welcome>
  );
}
