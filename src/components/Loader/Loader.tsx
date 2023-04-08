import { memo } from 'react';

import { LoaderView } from './Loader.view';
import { LoaderViewModel } from './Loader.view-model';
import { ActivityIndicatorProps } from 'react-native';

export interface LoaderProps extends ActivityIndicatorProps {}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface LoaderViewProps extends Omit<LoaderProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function Loader(props: LoaderProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <LoaderView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = LoaderViewModel();

  return viewModel;
}

export default memo(Loader);