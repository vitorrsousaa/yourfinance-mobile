import { memo } from 'react';

import { LabelChartView } from './LabelChart.view';
import { LabelChartViewModel } from './LabelChart.view-model';

export interface LabelChartProps {
  background: string;
  label: string;
}

export interface LabelChartViewProps extends Omit<LabelChartProps, ''> {}

function LabelChart(props: LabelChartProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <LabelChartView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = LabelChartViewModel();

  return viewModel;
}

export default memo(LabelChart);
