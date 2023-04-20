import { CheckBoxFormViewModelProps } from './CheckBoxForm.view-model';
import { CheckBoxFormViewProps } from './CheckBoxForm';
import * as styled from './CheckBoxForm.styles';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Text } from '../../../../../../components/Text';
import { useTheme } from 'styled-components/native';

interface Props {
  viewModel: CheckBoxFormViewModelProps;
  props: CheckBoxFormViewProps;
}

export function CheckBoxFormView({ viewModel, props }: Props) {
  const { data, selected, onChange } = props;

  const { colors } = useTheme();

  return (
    <styled.CheckBoxForm>
      <FlatList
        data={data}
        keyExtractor={(item) => item.value.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        renderItem={({ item }) => (
          <styled.Row onPress={() => onChange(item)} activeOpacity={0.9}>
            <Text weight="500" size={16} color={colors.black[900]}>
              {item.label}
            </Text>

            <styled.CheckBox selected={selected === item.value} />
          </styled.Row>
        )}
      />
    </styled.CheckBoxForm>
  );
}
