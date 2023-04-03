import styled from 'styled-components/native';

export const CategorySummary = styled.View`
  padding: 10px 12px;
  width: 165px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.white[100]};
  /* width: 100%; */
`;

export const ContainerDifference = styled.View`
  padding: 4px 6px;
  height: 24px;
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 82px;
  margin-top: 4px;

  background-color: ${({ theme }) => theme.colors.white[200]};
  /* background-color: blue; */
`;
