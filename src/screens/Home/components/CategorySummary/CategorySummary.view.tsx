import { CategorySummaryViewModelProps } from './CategorySummary.view-model';
import { CategorySummaryViewProps } from './CategorySummary';
import * as styled from './CategorySummary.styles';
import { Text } from 'react-native';
import formatAmount from '../../../../utils/formatAmout';

interface Props {
  viewModel: CategorySummaryViewModelProps;
  props: CategorySummaryViewProps;
}

export function CategorySummaryView({ viewModel, props }: Props) {
  const { amount, categoryName, difference } = props;

  return (
    <styled.CategorySummary>
      <Text>{categoryName}</Text>
      <Text>{formatAmount(amount)}</Text>
      <Text>{difference}</Text>
    </styled.CategorySummary>
  );
}
