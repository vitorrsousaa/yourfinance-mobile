import { AnalyticsViewModelProps } from './Analytics.view-model';
import { AnalyticsViewProps } from './Analytics';
import * as styled from './Analytics.styles';
import { Text } from '../../components/Text';

import { useTheme } from 'styled-components/native';
import Touchable from '../../components/Touchable';
import Header from '../../components/Header';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PieChart from './components/PieChart';

interface Props {
  viewModel: AnalyticsViewModelProps;
  props: AnalyticsViewProps;
}

export function AnalyticsView({ viewModel, props }: Props) {
  const { ...analyticsProps } = props;

  const { colors } = useTheme();

  return (
    <styled.Analytics>
      <Header title="Analytics" rightIcon={<Touchable item="search" />} />

      <styled.Container>
        <PieChart />
      </styled.Container>
    </styled.Analytics>
  );
}
