import { CategorySummaryViewModelProps } from './CategorySummary.view-model';
import { CategorySummaryViewProps } from './CategorySummary';
import * as styled from './CategorySummary.styles';
import formatAmount from '../../../../utils/formatAmout';
import { Text } from '../../../../components/Text';
import { useTheme } from 'styled-components/native';
import { TrendUp } from '../../../../components/Icons/TrendUp';
import { TrendDown } from '../../../../components/Icons/TrendDown';

interface Props {
  viewModel: CategorySummaryViewModelProps;
  props: CategorySummaryViewProps;
}

export function CategorySummaryView({ viewModel, props }: Props) {
  const { currentMonth, categoryName, percent } = props;
  const { colors } = useTheme();

  const color =
    categoryName === 'Receitas' ? colors.green[400] : colors.red[400];

  return (
    <styled.CategorySummary>
      <Text size={14} color={colors.black[700]}>
        {categoryName}
      </Text>
      <Text size={18} weight="500" color={colors.black[900]}>
        {formatAmount(currentMonth)}
      </Text>
      <styled.ContainerDifference>
        <Text weight="500" color={color} style={{ marginRight: 4 }}>
          {Math.floor(percent)}%
        </Text>
        {percent < 0 ? <TrendDown color={color} /> : <TrendUp color={color} />}
      </styled.ContainerDifference>
    </styled.CategorySummary>
  );
}
