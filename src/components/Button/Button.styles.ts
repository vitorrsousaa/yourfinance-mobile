import styled, { css } from 'styled-components/native';

import { Text } from '../Text';

import { ButtonVariants } from './theme/types';
import { variants } from './Button';

export const TextBase = styled(Text)<{
  customTheme: ButtonVariants;
  variant: variants;
  disabled?: boolean;
}>`
  font-size: 16px;
  font-weight: 700;

  color: ${({ customTheme, variant }) => customTheme[variant].initial.color};

  ${({ disabled, customTheme, variant }) =>
    disabled &&
    css`
      color: ${customTheme[variant].disabled.color};
    `}
`;

export const Button = styled.TouchableOpacity<{
  customTheme: ButtonVariants;
  variant: variants;
  disabled?: boolean;
}>`
  width: 320px;
  height: 47px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;

  background: ${({ customTheme, variant }) =>
    customTheme[variant].initial.background};

  color: ${({ customTheme, variant }) => customTheme[variant].initial.color};

  border: ${({ customTheme, variant }) => customTheme[variant].initial.border};

  ${({ disabled, customTheme, variant }) =>
    disabled &&
    css`
      background: ${customTheme[variant].disabled.background};

      color: ${customTheme[variant].disabled.color};

      border: ${customTheme[variant].disabled.border};
    `}
`;
