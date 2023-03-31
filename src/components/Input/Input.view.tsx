/* eslint-disable indent */
import { InputViewModelProps } from './Input.view-model';
import { InputViewProps } from './Input';
import * as styled from './Input.styles';
import { Text } from '../Text';
import { useTheme } from 'styled-components/native';
import { View } from 'react-native';

interface Props {
  viewModel: InputViewModelProps;
  props: InputViewProps;
}

export function InputView({ viewModel, props }: Props) {
  const { label, error, ...inputProps } = props;
  const { colors } = useTheme();

  const { handleBlurInput, handleFocusInput, isFocus } = viewModel;

  return (
    <styled.Container>
      <Text
        color={
          !error
            ? isFocus
              ? colors.green[400]
              : colors.black[300]
            : colors.red[400]
        }
      >
        {label}
      </Text>

      <View style={{ flexDirection: 'row' }}>
        <styled.Input
          onFocus={handleFocusInput}
          onBlur={handleBlurInput}
          isFocus={isFocus}
          error={!!error}
          placeholderTextColor={
            error
              ? colors.red[400]
              : isFocus
              ? colors.green[500]
              : colors.black[300]
          }
          {...inputProps}
        />
        {/* <View
          style={{ width: '16px', height: '16px', backgroundColor: 'blue' }}
        /> */}
      </View>

      {!!error && (
        <Text size={14} color={colors.red[400]}>
          {error}
        </Text>
      )}
    </styled.Container>
  );
}
