import styled from 'styled-components/native';

export const Home = styled.View`
  flex: 1;
`;

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.black[900]};
  padding-top: 56px;
`;

export const ContainerHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 24px;
`;

export const ContainerHero = styled.View`
  padding: 12px 24px;
`;

export const ContainerBalance = styled.View``;

export const ContainerSummary = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;

export const ContainerTransactions = styled.View`
  padding: 12px 24px;

  background: ${({ theme }) => theme.colors.white[200]};
`;
