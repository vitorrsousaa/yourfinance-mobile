import { memo } from 'react';

import { WelcomeView } from './Welcome.view';
import { WelcomeViewModel } from './Welcome.view-model';
import { ViewProps } from 'react-native';

export interface WelcomeProps extends ViewProps {}

export interface WelcomeViewProps extends Omit<WelcomeProps, ''> {}

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
