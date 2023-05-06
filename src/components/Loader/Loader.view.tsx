import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components/native';

import { LoaderViewProps } from './Loader';
import * as styled from './Loader.styles';
import { LoaderViewModelProps } from './Loader.view-model';

interface Props {
  viewModel: LoaderViewModelProps;
  props: LoaderViewProps;
}

export function LoaderView({ viewModel, props }: Props) {
  const { color, ...loaderProps } = props;

  const { colors } = useTheme();

  return (
    <styled.Loader>
      <ActivityIndicator color={colors.green[400]} {...loaderProps} />
    </styled.Loader>
  );
}
