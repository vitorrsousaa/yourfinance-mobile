import styled from 'styled-components/native';

import { Text } from '../../../../components/Text';

export const PieChart = styled.View`
  padding: 16px;
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.white[100]};
  border-radius: 12px;

  align-items: center;
`;

export const HeaderChart = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.black[100]};
  justify-content: space-between;
  padding: 4px;
  gap: 2px;
  width: 100%;
  border-radius: 8px;
`;

export const ButtonMonth = styled.TouchableOpacity<{ selected: boolean }>`
  width: 74px;
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.white[100] : 'transparent'};
  border-radius: 8px;
  padding: 4px;
  align-items: center;
`;

export const TextMonth = styled(Text)<{ selected: boolean }>`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme, selected }) =>
    selected ? theme.colors.black[900] : theme.colors.black[600]};
`;
