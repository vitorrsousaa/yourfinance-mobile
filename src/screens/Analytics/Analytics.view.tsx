import Header from '../../components/Header';
import { Text } from '../../components/Text';
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
    <styled.Analytics>
      <Header title="Analytics" rightIcon={<Touchable item="search" />} />

      <styled.Container>
        <PieChart />
      </styled.Container>
    </styled.Analytics>
  );
}
