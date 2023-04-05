import { LoaderViewModelProps } from './Loader.view-model';
import { LoaderViewProps } from './Loader';
import * as styled from './Loader.styles';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';

interface Props {
  viewModel: LoaderViewModelProps;
  props: LoaderViewProps;
}

export function LoaderView({ viewModel, props }: Props) {
  const { ...loaderProps } = props;

  return (
    <styled.Loader>
      <ActivityIndicator {...loaderProps} />
    </styled.Loader>
  );
}
