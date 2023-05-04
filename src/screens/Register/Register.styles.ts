import styled from 'styled-components/native';

export const Register = styled.KeyboardAvoidingView`
  flex: 1;
  background: ${({ theme }) => theme.colors.black[800]};
  align-items: center;
  justify-content: center;
`;

export const ContainerButton = styled.View`
  align-items: center;
  gap: 12px;
`;
