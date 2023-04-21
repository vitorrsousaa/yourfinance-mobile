import { memo } from 'react';

import { PieChartView } from './PieChart.view';
import { PieChartViewModel } from './PieChart.view-model';

export interface PieChartProps {}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface PieChartViewProps extends Omit<PieChartProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function PieChart(props: PieChartProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <PieChartView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = PieChartViewModel();

  return viewModel;
}

export default memo(PieChart);
