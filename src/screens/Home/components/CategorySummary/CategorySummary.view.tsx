import { CategorySummaryViewModelProps } from './CategorySummary.view-model';
import { CategorySummaryViewProps } from './CategorySummary';
import * as styled from './CategorySummary.styles';
import formatAmount from '../../../../utils/formatAmout';
import { Text } from '../../../../components/Text';
import { useTheme } from 'styled-components/native';

interface Props {
  viewModel: CategorySummaryViewModelProps;
  props: CategorySummaryViewProps;
}

export function CategorySummaryView({ viewModel, props }: Props) {
  const { amount, categoryName, difference } = props;
  const theme = useTheme();

  return (
    <styled.CategorySummary>
      <Text size={14} color={theme.colors.black[700]}>
        {categoryName}
      </Text>
      <Text size={18} weight="500" color={theme.colors.black[900]}>
        {formatAmount(amount)}
      </Text>
      <styled.ContainerDifference>
        <Text
          weight="500"
          color={
            categoryName === 'Receitas'
              ? theme.colors.green[400]
              : theme.colors.red[400]
          }
        >
          {difference}
        </Text>
      </styled.ContainerDifference>
    </styled.CategorySummary>
  );
}
