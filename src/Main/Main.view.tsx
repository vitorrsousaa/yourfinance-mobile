import { MainViewModelProps } from './Main.view-model';
import { MainViewProps } from './Main';
import * as styled from './Main.styles';

import Login from '../screens/Login';
import AuthRoutes from '../routes/auth.routes';
import Home from '../screens/Home';
import Transactions from '../screens/Transactions';

interface Props {
  viewModel: MainViewModelProps;
  props: MainViewProps;
}

export function MainView({ viewModel, props }: Props) {
  const { ...mainProps } = props;

  return (
    <styled.Main>
      {/* <Login /> */}
      {/* <AuthRoutes /> */}
      <Transactions />
    </styled.Main>
  );
}
