import { ProgressBarViewModelProps } from './ProgressBar.view-model';
import { ProgressBarViewProps } from './ProgressBar';
import * as styled from './ProgressBar.styles';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

interface Props {
  viewModel: ProgressBarViewModelProps;
  props: ProgressBarViewProps;
}

export function ProgressBarView({ viewModel, props }: Props) {
  const { progress } = props;
  const { colors } = useTheme();

  return (
    <styled.ProgressBar>
      <View
        style={{
          width: '100%',
          height: 8,
          borderRadius: 8,
          backgroundColor: colors.black[200],
        }}
      >
        <View
          style={{
            width: `${progress}%`,
            height: 8,
            borderRadius: 8,
            backgroundColor: colors.green[400],
          }}
        />
      </View>
    </styled.ProgressBar>
  );
}
