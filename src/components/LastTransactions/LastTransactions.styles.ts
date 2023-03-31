import styled from 'styled-components/native';

export const LastTransactions = styled.View`
  margin-top: 24px;
`;

export const ContainerHeader = styled.View<{ showFilter?: boolean }>`
  justify-content: ${({ showFilter }) =>
    showFilter ? 'space-between' : 'flex-start'};
  flex-direction: row;
  margin-bottom: 16px;
`;

export const Filter = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  gap: 10px;

  border: 1px solid ${({ theme }) => theme.colors.black[300]};
  border-radius: 8px;
`;
