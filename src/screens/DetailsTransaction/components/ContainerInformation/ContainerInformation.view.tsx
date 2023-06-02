import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Text } from '../../../../components/Text';
import formatAmount from '../../../../utils/formatAmout';

import { ContainerInformationViewProps } from './ContainerInformation';
import * as styled from './ContainerInformation.styles';
import { ContainerInformationViewModelProps } from './ContainerInformation.view-model';

interface Props {
  viewModel: ContainerInformationViewModelProps;
  props: ContainerInformationViewProps;
}

export function ContainerInformationView({ viewModel, props }: Props) {
  const { description, icon, modality, amount, ...containerInformationProps } =
    props;

  const { colors } = useTheme();

  return (
    <styled.ContainerInformation {...containerInformationProps}>
      <styled.ContainerIcon>{icon}</styled.ContainerIcon>
      <View style={{ marginVertical: 12, alignItems: 'center' }}>
        <Text size={20} weight="500">
          {description}
        </Text>
        <Text size={18} weight="500" color={colors.black[600]}>
          {modality}
        </Text>
      </View>

      <Text size={36} weight="700">
        {formatAmount(amount)}
      </Text>
    </styled.ContainerInformation>
  );
}
