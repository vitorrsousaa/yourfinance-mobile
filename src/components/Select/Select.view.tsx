import { Picker } from '@react-native-picker/picker';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

import { SelectViewProps } from './Select';
import * as styled from './Select.styles';
import { SelectViewModelProps } from './Select.view-model';

interface Props {
  viewModel: SelectViewModelProps;
  props: SelectViewProps;
}

export function SelectView({ viewModel, props }: Props) {
  const { placeholder, data, isLoading, disabled, ...selectedProps } = props;

  const { colors } = useTheme();

  const pickerStyle = {
    opacity: disabled ? 0.4 : 1,
    fontFamily: 'Gotham-400',
  };

  return (
    <styled.Select>
      <Picker
        dropdownIconColor={colors.black[900]}
        enabled={!disabled}
        style={pickerStyle}
        {...selectedProps}
      >
        {placeholder && <Picker.Item label={placeholder} value="" />}
        {!isLoading &&
          data.map((option) => (
            <Picker.Item
              key={option.value}
              label={option.label}
              value={option.value}
            />
          ))}
      </Picker>
    </styled.Select>
  );
}

const pickerEnabledStyle = {
  opacity: 1, // definir opacidade para quando o Picker estiver habilitado
};
