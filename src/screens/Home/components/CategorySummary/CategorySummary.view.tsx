import { useTheme } from 'styled-components/native';

import { Text } from '../../../../components/Text';

import { CategorySummaryViewProps } from './CategorySummary';
import * as styled from './CategorySummary.styles';
import { CategorySummaryViewModelProps } from './CategorySummary.view-model';

interface Props {
  viewModel: CategorySummaryViewModelProps;
  props: CategorySummaryViewProps;
}

export function CategorySummaryView({ viewModel, props }: Props) {
  const { ...categorySummaryProps } = props;
  const { currentMonth, categoryName, percent, difference, getIcon } =
    viewModel;

  const { colors } = useTheme();

  const color =
    categoryName === 'Receitas' ? colors.green[400] : colors.red[400];

  return (
    <styled.CategorySummary {...categorySummaryProps}>
      <Text size={14} color={colors.black[700]}>
        {categoryName}
      </Text>
      <Text size={18} weight="500" color={colors.black[900]}>
        {currentMonth}
      </Text>
      <Text size={14} color={colors.black[600]}>
        {difference}
      </Text>
      <styled.ContainerDifference>
        <Text weight="500" color={color} style={{ marginRight: 4 }}>
          {percent}
        </Text>
        {getIcon(color)}
      </styled.ContainerDifference>
    </styled.CategorySummary>
  );
}
