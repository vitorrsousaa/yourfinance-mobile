import styled from 'styled-components/native';

export const Goals = styled.View``;

export const ContainerHeader = styled.View`
  background: ${({ theme }) => theme.colors.black[900]};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 72px 24px 36px 24px;
`;
