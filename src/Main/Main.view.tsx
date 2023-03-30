import { MainViewModelProps } from './Main.view-model';
import { MainViewProps } from './Main';
import * as styled from './Main.styles';

import Login from '../screens/Login';

interface Props {
  viewModel: MainViewModelProps;
  props: MainViewProps;
}

export function MainView({ viewModel, props }: Props) {
  const { ...mainProps } = props;

  return (
    <styled.Main>
      <Login />
    </styled.Main>
  );
}
