import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Text } from '../../../../components/Text';

import { LabelChartViewProps } from './LabelChart';
import * as styled from './LabelChart.styles';
import { LabelChartViewModelProps } from './LabelChart.view-model';

interface Props {
  viewModel: LabelChartViewModelProps;
  props: LabelChartViewProps;
}

export function LabelChartView({ viewModel, props }: Props) {
  const { label, background, ...labelChartProps } = props;

  const { colors } = useTheme();

  return (
    <styled.LabelChart {...labelChartProps}>
      <View
        style={{
          width: 12,
          height: 12,
          borderRadius: 200,
          backgroundColor: background,
        }}
        testID="circle-label"
      />
      <Text size={14} color={colors.black[700]} weight="500">
        {label}
      </Text>
    </styled.LabelChart>
  );
}
