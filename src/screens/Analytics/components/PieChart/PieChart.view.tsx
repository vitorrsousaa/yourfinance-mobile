import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components/native';

import { Text } from '../../../../components/Text';

import { PieChartViewProps } from './PieChart';
import * as styled from './PieChart.styles';
import { PieChartViewModelProps } from './PieChart.view-model';

interface Props {
  viewModel: PieChartViewModelProps;
  props: PieChartViewProps;
}

export function PieChartView({ viewModel, props }: Props) {
  const { ...pieChartProps } = props;

  const { colors } = useTheme();

  return (
    <styled.PieChart>
      <Text size={18} color={colors.black[900]} weight="500">
        Maiores despesas
      </Text>

      <styled.HeaderChart>
        <styled.ButtonMonth selected={true}>
          <styled.TextMonth selected>Março</styled.TextMonth>
        </styled.ButtonMonth>
        <styled.ButtonMonth selected={false}>
          <styled.TextMonth selected={false}>Trimestre</styled.TextMonth>
        </styled.ButtonMonth>
        <styled.ButtonMonth selected={false}>
          <styled.TextMonth selected={false}>Semestre</styled.TextMonth>
        </styled.ButtonMonth>
        <styled.ButtonMonth selected={false}>
          <styled.TextMonth selected={false}>Anual</styled.TextMonth>
        </styled.ButtonMonth>
      </styled.HeaderChart>
    </styled.PieChart>
  );
}
