import { View } from 'react-native';

import Icon from '../../../../components/Icons';
import Modal from '../../../../components/Modal';
import { Text } from '../../../../components/Text';

import { ModalRepeatTransactionViewProps } from './ModalRepeatTransaction';
import * as styled from './ModalRepeatTransaction.styles';
import { ModalRepeatTransactionViewModelProps } from './ModalRepeatTransaction.view-model';

interface Props {
  viewModel: ModalRepeatTransactionViewModelProps;
  props: ModalRepeatTransactionViewProps;
}

export function ModalRepeatTransactionView({ viewModel, props }: Props) {
  const {
    onToggle,
    isVisible,
    month,
    onPlus,
    onMinus,
    ...modalRepeatTransactionProps
  } = props;

  return (
    <Modal
      {...modalRepeatTransactionProps}
      visible={isVisible}
      onClose={onToggle}
      title="Selecione o período de repetição"
      customTitleSize={20}
      action="Salvar"
      onAction={onToggle}
      hasCancelButton={false}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
          <Icon name="repeat" />
          <Text size={17}>Mensalmente</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <styled.ContainerArrow
            rotate={90}
            onPress={onPlus}
            testID="plus-button"
          >
            <Icon name="arrow" color="black" />
          </styled.ContainerArrow>
          <Text size={18}>{month}</Text>
          <styled.ContainerArrow
            rotate={270}
            onPress={onMinus}
            testID="minus-button"
          >
            <Icon name="arrow" color="black" />
          </styled.ContainerArrow>
        </View>
      </View>
    </Modal>
  );
}
