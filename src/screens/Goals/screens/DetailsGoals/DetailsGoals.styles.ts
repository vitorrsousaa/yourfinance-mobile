import styled from 'styled-components/native';

export const DetailsGoals = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.black[900]};
  padding: 72px 24px 16px 24px;
`;

export const ContainerTextMain = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const ContainerInfo = styled.View`
  padding: 24px;
  gap: 24px;

  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.colors.black[200]};
`;

export const Container = styled.View`
  padding: 24px;
  gap: 24px;
  flex: 1;
`;

export const Footer = styled.View`
  padding: 16px 24px;
  position: absolute;
  width: 100%;
  bottom: 0;
  background: ${({ theme }) => theme.colors.white[100]};

  flex-direction: row;
  justify-content: space-between;
  gap: 24px;
`;

export const ButtonFooter = styled.TouchableOpacity<{ income?: boolean }>`
  flex: 1;
  height: 60px;
  border-radius: 32px;
  background: ${({ theme, income }) =>
    !income ? theme.colors.black[200] : theme.colors.green[400]};
  align-items: center;
  justify-content: center;
`;
