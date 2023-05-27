import styled, { css } from 'styled-components/native';

import { isAndroid } from '../../utils/isAndroid';

export const ModalBody = styled.View`
  background: #fafafa;
  padding: 16px 24px;
  gap: 32px;

  ${!isAndroid &&
  css`
    padding-bottom: 48px;
  `}
`;

export const Overlay = styled.KeyboardAvoidingView`
  background: rgba(0, 0, 0, 0.7);
  flex: 1;
  align-items: stretch;
  justify-content: flex-end;
`;

export const Header = styled.View`
  gap: 16px;
`;

export const Actions = styled.View`
  width: 100%;

  justify-content: flex-end;
  flex-direction: row;

  ${isAndroid &&
  css`
    padding-bottom: 16px;
  `}
`;
