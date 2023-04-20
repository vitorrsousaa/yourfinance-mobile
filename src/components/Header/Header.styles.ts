import styled from 'styled-components/native';

export const Header = styled.View`
  background: ${({ theme }) => theme.colors.black[900]};
  flex-direction: row;
  align-items: center;
  gap: 8px;

  padding: 72px 24px 16px 24px;
`;
