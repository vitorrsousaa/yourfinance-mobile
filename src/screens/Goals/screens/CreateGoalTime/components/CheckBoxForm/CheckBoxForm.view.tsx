import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components/native';

import Radio from '../../../../../../components/Radio';
import { Text } from '../../../../../../components/Text';

import { CheckBoxFormViewProps } from './CheckBoxForm';
import * as styled from './CheckBoxForm.styles';
import { CheckBoxFormViewModelProps } from './CheckBoxForm.view-model';

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

            <Radio selected={selected === item.value} />
          </styled.Row>
        )}
      />
    </styled.CheckBoxForm>
  );
}
