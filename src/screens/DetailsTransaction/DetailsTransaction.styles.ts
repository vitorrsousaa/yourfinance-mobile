import styled from 'styled-components/native';

export const DetailsTransaction = styled.SafeAreaView`
  flex: 1;
`;

export const ContainerInformation = styled.View`
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

export const ContainerIcon = styled.View`
  width: 90px;
  height: 90px;
  border-radius: 9000px;
  background-color: ${({ theme }) => theme.colors.black[100]};

  align-items: center;
  justify-content: center;
`;

export const Divider = styled.View`
  height: 2px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black[100]};
  margin: 24px 0;
`;
