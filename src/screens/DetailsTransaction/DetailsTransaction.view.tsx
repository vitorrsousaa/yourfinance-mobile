import { View } from 'react-native';

import DangerZone from '../../components/DangerZone';

import ContainerInformation from './components/ContainerInformation';
import Header from './components/Header';
import { DetailsTransactionViewProps } from './DetailsTransaction';
import * as styled from './DetailsTransaction.styles';
import { DetailsTransactionViewModelProps } from './DetailsTransaction.view-model';

interface Props {
  viewModel: DetailsTransactionViewModelProps;
  props: DetailsTransactionViewProps;
}

export function DetailsTransactionView({ viewModel, props }: Props) {
  const { ...detailsTransactionProps } = props;
  const { params, isLoading, getIcon, handleDeleteTransaction, goBack } =
    viewModel;

  return (
    <styled.DetailsTransaction {...detailsTransactionProps}>
      <Header
        onBack={goBack}
        date={params.date}
        onDelete={handleDeleteTransaction}
        disabled={isLoading}
      />

      <ContainerInformation
        icon={getIcon(params.category.name)}
        description={params.description}
        modality={params.modality.name}
        amount={params.amount}
      />

      <View style={{ paddingHorizontal: 24 }}>
        <styled.Divider />

        <DangerZone
          action="Excluir movs"
          onAction={handleDeleteTransaction}
          isLoading={isLoading}
        />
      </View>
    </styled.DetailsTransaction>
  );
}
