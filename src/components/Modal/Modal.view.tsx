import { ModalViewModelProps } from './Modal.view-model';
import { ModalViewProps } from './Modal';
import * as styled from './Modal.styles';
import { Modal, View } from 'react-native';
import { Text } from '../Text';
import { isAndroid } from '../../utils/isAndroid';
import { useTheme } from 'styled-components/native';
import Button from '../Button';

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
    onClose,
  } = props;

  const { colors } = useTheme();

  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      animationType="slide"
      transparent
    >
      <styled.Overlay behavior={isAndroid ? 'height' : 'padding'}>
        <styled.ModalBody>
          <styled.Header>
            <Text
              size={24}
              weight="500"
              color={type === 'primary' ? colors.black[900] : colors.red[400]}
            >
              {title}
            </Text>
            <Text size={16} color={colors.black[600]}>
              {subtitle}
            </Text>
          </styled.Header>
          {children && children}

          <styled.Actions>
            <Button variant="empty" style={{ width: 160 }} onPress={onClose}>
              Cancelar
            </Button>
            <Button
              variant={type === 'danger' ? 'danger' : 'primary'}
              style={{ width: 160 }}
            >
              {action}
            </Button>
          </styled.Actions>
        </styled.ModalBody>
      </styled.Overlay>
    </Modal>
  );
}
