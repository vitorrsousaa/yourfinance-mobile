import styled, { css } from 'styled-components/native';

export const ModalRepeatTransaction = styled.View``;

export const ContainerArrow = styled.TouchableOpacity<{ rotate: number }>`
  transform: ${({ rotate }) => css`
  rotate(${rotate}deg)
  `};

  padding: 0 4px;
`;
