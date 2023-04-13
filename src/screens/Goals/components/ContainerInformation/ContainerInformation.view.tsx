import { ContainerInformationViewModelProps } from './ContainerInformation.view-model';
import { ContainerInformationViewProps } from './ContainerInformation';
import * as styled from './ContainerInformation.styles';
import { View } from 'react-native';
import { Text } from '../../../../components/Text';
import { useTheme } from 'styled-components/native';

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
