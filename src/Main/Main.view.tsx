import { MainViewModelProps } from './Main.view-model';
import { MainViewProps } from './Main';
import * as styled from './Main.styles';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Transactions from '../screens/Transactions';
import { Router } from '../routes';

interface Props {
  viewModel: MainViewModelProps;
  props: MainViewProps;
}

export function MainView({ viewModel, props }: Props) {
  const { ...mainProps } = props;

  return (
    <styled.Main>
      {/* <Login /> */}
      {/* <Home /> */}
      <Router />
      {/* <Transactions /> */}
    </styled.Main>
  );
}
