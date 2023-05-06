import styled from 'styled-components/native';

import theme from '../assets/theme';

interface TextProps {
  weight?: '300' | '400' | '500' | '700';
  color?: string;
  size?: number;
  opacity?: number;
}

export const Text = styled.Text<TextProps>`
  font-family: ${({ weight }) => (weight ? `Gotham-${weight}` : 'Gotham-400')};
  color: ${({ color }) => color || theme.colors.black[900]};
  font-size: ${({ size }) => (size ? `${size}px` : '14px')};
  opacity: ${({ opacity }) => opacity || 1};
`;
