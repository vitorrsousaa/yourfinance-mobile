import { Modal, View } from 'react-native';
import { useTheme } from 'styled-components/native';

import { isAndroid } from '../../utils/isAndroid';
import Button from '../Button';
import { Text } from '../Text';

import { ModalViewProps } from './Modal';
import * as styled from './Modal.styles';
import { ModalViewModelProps } from './Modal.view-model';

interface Props {
  viewModel: ModalViewModelProps;
  props: ModalViewProps;
}

export function ModalView({ viewModel, props }: Props) {
  const {
    action,
    title,
    children,
    subtitle,
    type = 'primary',
    visible,
    isLoadingAction,
    isDisabledAction,
    customTitleSize = 24,
    hasCancelButton = true,
    onClose,
    onAction,
    ...modalProps
  } = props;

  const { colors } = useTheme();

  return (
    <Modal
      {...modalProps}
      visible={visible}
      onRequestClose={onClose}
      animationType="slide"
      transparent
    >
      <styled.Overlay behavior={isAndroid ? 'height' : 'padding'}>
        <styled.ModalBody>
          <styled.Header>
            <Text
              size={customTitleSize}
              weight="500"
              color={type === 'primary' ? colors.black[900] : colors.red[400]}
            >
              {title}
            </Text>
            {subtitle && (
              <Text size={16} color={colors.black[600]}>
                {subtitle}
              </Text>
            )}
          </styled.Header>
          {children && children}

          {action && (
            <styled.Actions>
              {hasCancelButton && (
                <Button
                  variant="empty"
                  style={{ flex: 1 }}
                  onPress={onClose}
                  disabled={isLoadingAction}
                >
                  Cancelar
                </Button>
              )}
              <Button
                variant={type === 'danger' ? 'danger' : 'primary'}
                style={{ flex: 1 }}
                onPress={onAction}
                loading={isLoadingAction}
                disabled={isDisabledAction}
              >
                {action}
              </Button>
            </styled.Actions>
          )}
        </styled.ModalBody>
      </styled.Overlay>
    </Modal>
  );
}
