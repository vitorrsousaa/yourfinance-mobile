import { memo } from 'react';

import { WelcomeView } from './Welcome.view';
import { WelcomeViewModel, WelcomeViewModelProps } from './Welcome.view-model';

export interface WelcomeProps {}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface WelcomeViewProps extends Omit<WelcomeProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function Welcome(props: WelcomeProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <WelcomeView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = WelcomeViewModel();

  return viewModel;
}

export default memo(Welcome);
