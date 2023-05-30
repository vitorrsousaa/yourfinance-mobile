import styled from 'styled-components/native';

export const Transaction = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;

  background: ${({ theme }) => theme.colors.white[100]};
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
`;
