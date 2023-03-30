import { memo } from 'react';

import { MainView } from './Main.view';
import { MainViewModel, MainViewModelProps } from './Main.view-model';

export interface MainProps {}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface MainViewProps extends Omit<MainProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function Main(props: MainProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <MainView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = MainViewModel();

  return viewModel;
}

export default memo(Main);
