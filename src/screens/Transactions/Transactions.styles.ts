import styled from 'styled-components/native';

export const Transactions = styled.SafeAreaView`
  flex: 1;
`;

export const ContainerTransactions = styled.View`
  padding: 16px 24px;
  background: ${({ theme }) => theme.colors.white[200]};
  flex: 1;
`;
