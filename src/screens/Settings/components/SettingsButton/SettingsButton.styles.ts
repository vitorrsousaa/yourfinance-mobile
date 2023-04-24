import styled from 'styled-components/native';

export const SettingsButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 16px 0;
  border-bottom-color: ${({ theme }) => theme.colors.black[200]};
  border-bottom-width: 1px;
`;

export const ContainerArrow = styled.View`
  transform: rotate(180deg);
`;
