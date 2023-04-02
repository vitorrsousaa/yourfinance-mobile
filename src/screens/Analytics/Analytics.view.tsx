import { AnalyticsViewModelProps } from './Analytics.view-model';
import { AnalyticsViewProps } from './Analytics';
import * as styled from './Analytics.styles';
import { Text } from '../../components/Text';

import { useTheme } from 'styled-components/native';
import Touchable from '../../components/Touchable';

interface Props {
  viewModel: AnalyticsViewModelProps;
  props: AnalyticsViewProps;
}

export function AnalyticsView({ viewModel, props }: Props) {
  const { ...analyticsProps } = props;

  const { colors } = useTheme();

  return (
    <styled.Analytics>
      <styled.ContainerHeader>
        <Text weight="500" size={18} color={colors.white[100]}>
          Analytics
        </Text>
        <Touchable item="search" />
      </styled.ContainerHeader>
    </styled.Analytics>
  );
}
