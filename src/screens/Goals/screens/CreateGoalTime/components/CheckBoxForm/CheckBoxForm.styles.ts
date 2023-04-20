import styled from 'styled-components/native';

export const CheckBoxForm = styled.View``;

export const Row = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 6px 0px;
`;

export const CheckBox = styled.View<{ selected: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 100px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.black[900]};

  background: ${({ selected, theme }) =>
    selected ? theme.colors.black[800] : 'transparent'};
`;
