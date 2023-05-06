import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Text } from '../../../../components/Text';

import { ContainerInformationViewProps } from './ContainerInformation';
import * as styled from './ContainerInformation.styles';
import { ContainerInformationViewModelProps } from './ContainerInformation.view-model';

interface Props {
  viewModel: ContainerInformationViewModelProps;
  props: ContainerInformationViewProps;
}

export function ContainerInformationView({ viewModel, props }: Props) {
  const { children, subtitle, title } = props;

  const { colors } = useTheme();

  return (
    <styled.ContainerInformation>
      <View>
        <Text
          weight="500"
          size={16}
          color={colors.black[700]}
          style={{ marginBottom: 8 }}
        >
          {title}
        </Text>
        <Text size={12} weight="500" color={colors.black[500]}>
          {subtitle}
        </Text>
      </View>
      {children}
    </styled.ContainerInformation>
  );
}
