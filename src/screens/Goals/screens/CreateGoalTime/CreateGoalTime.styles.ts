import styled from 'styled-components/native';

export const CreateGoalTime = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  background: ${({ theme }) => theme.colors.black[900]};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 72px 24px 16px 24px;
`;
