import { InputViewModelProps } from './Input.view-model';
import { InputViewProps } from './Input';
import * as styled from './Input.styles';
import { Text } from '../Text';
import { useTheme } from 'styled-components/native';

interface Props {
  viewModel: InputViewModelProps;
  props: InputViewProps;
}

export function InputView({ viewModel, props }: Props) {
  const { label, error, ...inputProps } = props;
  const theme = useTheme();

  const { handleBlurInput, handleFocusInput, isFocus } = viewModel;

  return (
    <styled.Container>
      <Text color={!error ? theme.colors.black[300] : theme.colors.red[400]}>
        {label}
      </Text>

      <styled.Input
        onFocus={handleFocusInput}
        onBlur={handleBlurInput}
        isFocus={isFocus}
        error={!!error}
        placeholderTextColor={
          error
            ? theme.colors.red[400]
            : isFocus
            ? theme.colors.green[500]
            : theme.colors.black[300]
        }
        {...inputProps}
      />

      {!!error && (
        <Text size={14} color={theme.colors.red[400]}>
          {error}
        </Text>
      )}
    </styled.Container>
  );
}
