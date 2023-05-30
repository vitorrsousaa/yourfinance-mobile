import { View } from 'react-native';
import { VictoryPie } from 'victory-native';

import { AnalyticsError } from '../../../../components/Illustrations/AnalyticsError';
import Loader from '../../../../components/Loader';
import { Text } from '../../../../components/Text';
import LabelChart from '../LabelChart';

import { PieChartViewProps } from './PieChart';
import * as styled from './PieChart.styles';
import { PieChartViewModelProps } from './PieChart.view-model';

interface Props {
  viewModel: PieChartViewModelProps;
  props: PieChartViewProps;
}

export function PieChartView({ viewModel, props }: Props) {
  const { ...pieChartProps } = props;

  const {
    hasError,
    isLoading,
    colors,
    getMonthOptions,
    setSelectedPeriod,
    getBiggestModality,
    getLabelChart,
  } = viewModel;

  return (
    <styled.PieChart {...pieChartProps}>
      {hasError ? (
        <View style={{ alignItems: 'center', gap: 24 }}>
          <Text size={14} style={{ textAlign: 'center' }}>
            Parece que tem um erro! Não conseguimos calcular nada. Tente
            novamente mais tarde.
          </Text>
          <AnalyticsError />
        </View>
      ) : (
        <>
          <View style={{ width: '100%', alignItems: 'flex-start' }}>
            <Text size={18} weight="500">
              Maiores despesas
            </Text>
          </View>
          <styled.HeaderChart>
            {getMonthOptions().map((options) => (
              <styled.ButtonMonth
                key={options.label}
                selected={options.selected}
                onPress={() => setSelectedPeriod(options.month)}
              >
                <styled.TextMonth selected={options.selected}>
                  {options.label}
                </styled.TextMonth>
              </styled.ButtonMonth>
            ))}
          </styled.HeaderChart>

          {isLoading ? (
            <View style={{ height: 150, justifyContent: 'center' }}>
              <Loader size={'large'} />
            </View>
          ) : (
            <>
              <VictoryPie
                data={getBiggestModality()}
                labels={() => ''}
                innerRadius={40}
                colorScale={colors}
                x="name"
                y="amount"
                height={250}
              />

              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}
              >
                {getLabelChart().map((label) => (
                  <LabelChart
                    key={label.name}
                    background={label.background}
                    label={label.name}
                  />
                ))}
              </View>
            </>
          )}
        </>
      )}
    </styled.PieChart>
  );
}
