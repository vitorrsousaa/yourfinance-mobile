import styled from 'styled-components/native';

export const Radio = styled.View<{ selected: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 100px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.black[900]};

  align-items: center;
  justify-content: center;

  background: ${({ selected, theme }) =>
    selected ? theme.colors.black[800] : 'transparent'};
`;
