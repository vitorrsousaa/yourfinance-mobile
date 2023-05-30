import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

import DangerZone from '../../components/DangerZone';
import Icon from '../../components/Icons';
import { Text } from '../../components/Text';
import formatAmount from '../../utils/formatAmout';
import { formatCompleteDate } from '../../utils/formatDate';

import { DetailsTransactionViewProps } from './DetailsTransaction';
import * as styled from './DetailsTransaction.styles';
import { DetailsTransactionViewModelProps } from './DetailsTransaction.view-model';

interface Props {
  viewModel: DetailsTransactionViewModelProps;
  props: DetailsTransactionViewProps;
}

export function DetailsTransactionView({ viewModel, props }: Props) {
  const { ...detailsTransactionProps } = props;
  const { params, getIcon } = viewModel;
  const { colors } = useTheme();

  return (
    <styled.DetailsTransaction {...detailsTransactionProps}>
      <styled.Header>
        <Text>X</Text>
        <Text weight="500" size={15}>
          {formatCompleteDate(params.date)}
        </Text>
        <Icon name="trash" color={colors.black[900]} />
      </styled.Header>

      <styled.ContainerInformation>
        <styled.ContainerIcon>
          {getIcon(params.category.name)}
        </styled.ContainerIcon>
        <View style={{ marginVertical: 12, alignItems: 'center' }}>
          <Text size={20} weight="500">
            {params.description}
          </Text>
          <Text size={18} weight="500" color={colors.black[600]}>
            {params.modality.name}
          </Text>
        </View>

        <Text size={36} weight="700">
          {formatAmount(params.amount)}
        </Text>
      </styled.ContainerInformation>

      <View style={{ paddingHorizontal: 24 }}>
        <styled.Divider />

        <DangerZone
          action="Excluir movs"
          onAction={() => console.log('testando')}
        />
      </View>
    </styled.DetailsTransaction>
  );
}
