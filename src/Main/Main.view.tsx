import { MainViewModelProps } from './Main.view-model';
import { MainViewProps } from './Main';
import * as styled from './Main.styles';
import Welcome from '../components/Welcome';
import Input from '../components/Input';

interface Props {
  viewModel: MainViewModelProps;
  props: MainViewProps;
}

export function MainView({ viewModel, props }: Props) {
  const { ...mainProps } = props;

  return (
    <styled.Main>
      <Welcome />
      <Input
        label="E-mail"
        placeholder="Digite seu e-mail"
        error="E-mail incorreto"
        keyboardType="email-address"
      />
      <Input label="Senha" placeholder="Digite sua senha" />
    </styled.Main>
  );
}
