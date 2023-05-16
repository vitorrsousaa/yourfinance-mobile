import styled from 'styled-components/native';

export const GoalCard = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.white[100]};
  flex-direction: column;
  padding: 12px;
  gap: 16px;

  /* width: 345px;
height: 105px; */

  border-radius: 12px;
`;

export const GoalHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const GoalTargets = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
