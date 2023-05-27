import { FlatList, View } from 'react-native';
import { useTheme } from 'styled-components/native';

import Modal from '../../../../components/Modal';
import Radio from '../../../../components/Radio';
import { Text } from '../../../../components/Text';

import { ModalSelectedModalityViewProps } from './ModalSelectedModality';
import * as styled from './ModalSelectedModality.styles';
import { ModalSelectedModalityViewModelProps } from './ModalSelectedModality.view-model';

interface Props {
  viewModel: ModalSelectedModalityViewModelProps;
  props: ModalSelectedModalityViewProps;
}

export function ModalSelectedModalityView({ viewModel, props }: Props) {
  const {
    isVisible,
    onToggle,
    data,
    onPressItem,
    selectedModality,
    ...modalSelectedModalityProps
  } = props;

  const { colors } = useTheme();

  return (
    <Modal
      {...modalSelectedModalityProps}
      visible={isVisible}
      title="Selecione a modalidade"
      onClose={onToggle}
      customTitleSize={20}
    >
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View style={{ backgroundColor: colors.black[300], height: 1 }} />
        )}
        renderItem={({ item }) => (
          <styled.Button
            activeOpacity={0.8}
            onPress={() => {
              onPressItem(item);
              onToggle();
            }}
          >
            <Text size={18}>{item.name}</Text>
            <Radio selected={selectedModality?.name === item.name} />
          </styled.Button>
        )}
      />
    </Modal>
  );
}
