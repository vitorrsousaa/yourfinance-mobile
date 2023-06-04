import { Text } from '../Text';

import { WelcomeViewProps } from './Welcome';
import * as styled from './Welcome.styles';
import { WelcomeViewModelProps } from './Welcome.view-model';

interface Props {
  viewModel: WelcomeViewModelProps;
  props: WelcomeViewProps;
}

export function WelcomeView({ viewModel, props }: Props) {
  const { ...welcomeProps } = props;

  return (
    <styled.Welcome {...welcomeProps}>
      <Text color="#fff">Bem vindo(a) ao</Text>
      <Text size={32} weight="300" color="#fff">
        your
        <Text weight="700" size={32} color="#fff">
          Finance
        </Text>
      </Text>
    </styled.Welcome>
  );
}
