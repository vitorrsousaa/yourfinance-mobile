import styled from 'styled-components/native';

export const Row = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 32px;

  /* background: blue; */

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.black[200]};

  margin-top: 12px;
  margin-bottom: 12px;
`;
