
import { DetailsTransactionViewModelProps } from './DetailsTransaction.view-model';
import { DetailsTransactionViewProps } from './DetailsTransaction';
import * as styled from './DetailsTransaction.styles';
import { Text } from 'react-native';

interface Props {
  viewModel: DetailsTransactionViewModelProps;
  props: DetailsTransactionViewProps;
}

export function DetailsTransactionView({ viewModel, props }: Props) {
  const { ...detailsTransactionProps } = props;

  return (
    <styled.DetailsTransaction>
      <Text>DetailsTransaction</Text>
    </styled.DetailsTransaction>
  );
}
