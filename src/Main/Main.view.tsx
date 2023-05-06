import { Router } from '../routes';

import { MainViewProps } from './Main';
import * as styled from './Main.styles';
import { MainViewModelProps } from './Main.view-model';

interface Props {
  viewModel: MainViewModelProps;
  props: MainViewProps;
}

export function MainView({ viewModel, props }: Props) {
  const { ...mainProps } = props;

  return (
    <styled.Main>
      <Router />
    </styled.Main>
  );
}
