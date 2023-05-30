import styled from 'styled-components/native';

export const DangerZone = styled.View`
  gap: 24px;
  padding-bottom: 16px;
  border-bottom-color: ${({ theme }) => theme.colors.black[200]};
  border-bottom-width: 1px;
`;
