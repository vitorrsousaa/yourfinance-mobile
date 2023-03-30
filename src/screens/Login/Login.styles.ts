import styled from 'styled-components/native';

export const Login = styled.KeyboardAvoidingView`
  flex: 1;
  background: ${({ theme }) => theme.colors.black[800]};
  align-items: center;
  justify-content: space-between;
  padding-top: 82px;
  padding-bottom: 82px;
`;
