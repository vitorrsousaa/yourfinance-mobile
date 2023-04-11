import { DetailsGoalsViewModelProps } from './DetailsGoals.view-model';
import { DetailsGoalsViewProps } from './DetailsGoals';
import * as styled from './DetailsGoals.styles';
import { Text } from '../../../../components/Text';
import { View } from 'react-native';
import { Target } from '../../../../components/Icons/Target';
import Touchable from '../../../../components/Touchable';
import { useTheme } from 'styled-components/native';
import { Upload } from '../../../../components/Icons/Upload';
import { Download } from '../../../../components/Icons/Download';
import { useNavigation } from '@react-navigation/native';

interface Props {
  viewModel: DetailsGoalsViewModelProps;
  props: DetailsGoalsViewProps;
}

export function DetailsGoalsView({ viewModel, props }: Props) {
  const { ...detailsGoalsProps } = props;
  const { handleRemoveGoal } = viewModel;

  const navigation = useNavigation();

  const { colors } = useTheme();

  return (
    <styled.DetailsGoals>
      <styled.Header>
        <styled.ContainerTextMain>
          <Target />
          <Text weight="500" size={24} color={colors.white[100]}>
            Nome da meta
          </Text>
        </styled.ContainerTextMain>
        <View style={{ flexDirection: 'row', gap: 4 }}>
          <Touchable item="arrow" onPress={navigation.goBack} />
          <Touchable item="trash" onPress={handleRemoveGoal} />
        </View>
      </styled.Header>

      <styled.ContainerInfo>
        <View style={{ gap: 8 }}>
          <Text weight="500" size={28}>
            R$ 500,00
          </Text>
          <Text weight="500" size={16} color={colors.black[500]}>
            de R$ 1500,00
          </Text>
        </View>

        <Text>progress bar</Text>
      </styled.ContainerInfo>

      <styled.ContainerHistoric>
        <Text size={16} weight="500">
          Histórico
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View style={{ gap: 8 }}>
            <Text color={colors.black[600]} weight="500" size={16}>
              05 Mar
            </Text>
            <Text weight="500" size={16}>
              Aplicação
            </Text>
          </View>
          <Text weight="500" size={16} color={colors.green[500]}>
            R$ 200,00
          </Text>
        </View>
      </styled.ContainerHistoric>

      <styled.Footer>
        <styled.ButtonFooter activeOpacity={0.9}>
          <Upload />
          <Text weight="500">Resgatar</Text>
        </styled.ButtonFooter>

        <styled.ButtonFooter income activeOpacity={0.9}>
          <Download />
          <Text weight="500">Guardar</Text>
        </styled.ButtonFooter>
      </styled.Footer>
    </styled.DetailsGoals>
  );
}
