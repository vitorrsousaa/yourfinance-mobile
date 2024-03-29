import styled from 'styled-components/native';

export const Home = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.black[900]};
  padding-top: 56px;
  padding: 56px 24px 24px;
`;

export const ContainerHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 0;
`;

export const ContainerHero = styled.View`
  gap: 16px;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
`;

export const ContainerSummary = styled.View`
  flex-direction: row;
  justify-content: space-between;
  /* margin-top: 16px; */
`;

export const ContainerTransactions = styled.View`
  padding: 12px 24px;
  flex: 1;

  background: ${({ theme }) => theme.colors.white[200]};
`;
