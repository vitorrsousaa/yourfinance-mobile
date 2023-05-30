import { ScrollView } from 'react-native';

import Header from '../../components/Header';
import Touchable from '../../components/Touchable';

import PieChart from './components/PieChart';
import { AnalyticsViewProps } from './Analytics';
import * as styled from './Analytics.styles';
import { AnalyticsViewModelProps } from './Analytics.view-model';

interface Props {
  viewModel: AnalyticsViewModelProps;
  props: AnalyticsViewProps;
}

export function AnalyticsView({ viewModel, props }: Props) {
  const { ...analyticsProps } = props;

  return (
    <styled.Analytics {...analyticsProps}>
      <Header
        title="Analytics"
        rightIcon={<Touchable item="search" />}
        leftIcon={false}
      />

      <ScrollView style={{ flex: 1 }}>
        <styled.Container>
          <PieChart />
        </styled.Container>
      </ScrollView>
    </styled.Analytics>
  );
}
