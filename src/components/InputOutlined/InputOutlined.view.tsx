/* eslint-disable indent */
import { InputViewModelProps } from './InputOutlined.view-model';
import { InputViewProps } from './InputOutlined';
import * as styled from './InputOutlined.styles';
import { Text } from '../Text';
import { useTheme } from 'styled-components/native';
import { View } from 'react-native';

interface Props {
  viewModel: InputViewModelProps;
  props: InputViewProps;
}

export function InputOutlinedView({ viewModel, props }: Props) {
  const { error, border = true, fixedHeight = true, ...inputProps } = props;
  const { colors } = useTheme();

  const { handleBlurInput, handleFocusInput, isFocus } = viewModel;

  return (
    <styled.Container fixedHeight={fixedHeight}>
      <View style={{ flexDirection: 'row' }}>
        <styled.Input
          border={border}
          underlineColorAndroid="transparent"
          fixedHeight={fixedHeight}
          onFocus={handleFocusInput}
          onBlur={handleBlurInput}
          isFocus={isFocus}
          error={!!error}
          placeholderTextColor={
            error
              ? colors.red[400]
              : isFocus
              ? colors.green[500]
              : colors.black[700]
          }
          {...inputProps}
        />
      </View>

      {!!error && (
        <Text size={14} color={colors.red[400]}>
          {error}
        </Text>
      )}
    </styled.Container>
  );
}
