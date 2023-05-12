import { ActivityIndicatorProps } from 'react-native';

import { LoaderView } from './Loader.view';
import { LoaderViewModel } from './Loader.view-model';

export interface LoaderProps extends ActivityIndicatorProps {}
import { memo } from 'react';

export interface LoaderViewProps extends Omit<LoaderProps, ''> {}

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
