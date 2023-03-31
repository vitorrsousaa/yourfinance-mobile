import styled from 'styled-components/native';

export const Touchable = styled.TouchableOpacity<{ background?: string }>`
  justify-content: center;
  align-items: center;

  width: 44px;
  height: 44px;

  background: ${({ theme, background }) =>
    background === 'black' ? theme.colors.black[800] : theme.colors.white[100]};

  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1);
  border-radius: 32px;
`;
