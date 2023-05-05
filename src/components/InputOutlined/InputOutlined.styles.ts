/* eslint-disable indent */
import styled, { css } from 'styled-components/native';

export const Container = styled.View<{ fixedHeight: boolean }>`
  ${({ fixedHeight }) =>
    fixedHeight &&
    css`
      height: 85px;
    `}

  align-items: flex-start;

  margin-bottom: 16px;
`;

export const Input = styled.TextInput<{
  isFocus: boolean;
  error?: boolean;
  border: boolean;
  fixedHeight: boolean;
}>`
  border-bottom-width: ${({ border }) => (border ? '2px' : '0px')};

  border-color: ${({ isFocus, theme, error }) =>
    error
      ? theme.colors.red[400]
      : isFocus
      ? theme.colors.green[500]
      : theme.colors.black[600]};

  color: ${({ isFocus, theme, error }) =>
    error
      ? theme.colors.red[400]
      : isFocus
      ? theme.colors.green[500]
      : theme.colors.black[600]};

  margin: 8px 0px;
  width: 100%;
  height: ${({ fixedHeight }) => (fixedHeight ? '50px' : '100%')};

  font-size: 16px;
  font-family: 'Gotham-400';
`;
