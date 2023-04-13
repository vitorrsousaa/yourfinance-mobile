import styled from 'styled-components/native';

export const ContinuousButton = styled.TouchableOpacity`
  background: ${({ theme, disabled }) =>
    disabled ? theme.colors.black[200] : theme.colors.black[900]};
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: none;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: 24px;
  bottom: 48px;
`;
