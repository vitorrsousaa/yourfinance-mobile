import styled from 'styled-components/native';

export const DetailsTransaction = styled.SafeAreaView`
  flex: 1;
`;

export const Divider = styled.View`
  height: 2px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black[100]};
  margin: 24px 0;
`;
