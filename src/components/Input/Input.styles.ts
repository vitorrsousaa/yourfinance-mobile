/* eslint-disable indent */
import styled from 'styled-components/native';

export const Container = styled.View`
  height: 85px;
  align-items: flex-start;

  margin-bottom: 32px;
`;

export const Input = styled.TextInput<{ isFocus: boolean; error?: boolean }>`
  border: solid 1px;

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
  border-radius: 4px;
  width: 320px;
  height: 50px;
  padding: 16px 13px;
  font-size: 16px;
  font-family: 'Gotham-400';
`;
