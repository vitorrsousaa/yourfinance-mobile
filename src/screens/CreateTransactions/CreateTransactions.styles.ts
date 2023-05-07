import styled, { css } from 'styled-components/native';

export const CreateTransactions = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.View`
  padding: 24px;
`;

export const ContainerArrow = styled.TouchableOpacity<{ rotate: number }>`
  transform: ${({ rotate }) => css`
  rotate(${rotate}deg)
  `};
`;
