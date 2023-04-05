import { MainViewModelProps } from './Main.view-model';
import { MainViewProps } from './Main';
import * as styled from './Main.styles';
import { Router } from '../routes';

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
