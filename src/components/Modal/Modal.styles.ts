import styled from 'styled-components/native';

export const ModalBody = styled.View`
  background: #fafafa;
  padding: 16px 24px;
  gap: 16px;
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

  justify-content: center;
  flex-direction: row;
`;
