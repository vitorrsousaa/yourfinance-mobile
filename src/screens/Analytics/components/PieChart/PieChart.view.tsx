import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components/native';
import { VictoryPie } from 'victory-native';

import { Text } from '../../../../components/Text';
import LabelChart from '../LabelChart';

import { PieChartViewProps } from './PieChart';
import * as styled from './PieChart.styles';
import { PieChartViewModelProps } from './PieChart.view-model';

interface Props {
  viewModel: PieChartViewModelProps;
  props: PieChartViewProps;
}

const teste = ['#0D2535', '#5388D8', '#F4BE37', '#FF9F40', '#72E485'];

export function PieChartView({ viewModel, props }: Props) {
  const { ...pieChartProps } = props;

  const { colors } = useTheme();

  // Preciso passar a prop em ordem crescente já

  return (
    <styled.PieChart>
      <View style={{ width: '100%', alignItems: 'flex-start' }}>
        <Text size={18} color={colors.black[900]} weight="500">
          Maiores despesas
        </Text>
      </View>
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

      <VictoryPie
        data={[
          { x: 'Dogs', y: 40 },
          { x: 'Cats', y: 35 },
          { x: 'Birds', y: 55 },
          { x: 'Pass', y: 55 },
          { x: 'Two', y: 55 },
        ]}
        labels={({ datum }) => `${datum.x}`}
        innerRadius={60}
        width={320}
        colorScale={teste}
      />

      <LabelChart background="#395bfc" label="despesas" />
    </styled.PieChart>
  );
}
