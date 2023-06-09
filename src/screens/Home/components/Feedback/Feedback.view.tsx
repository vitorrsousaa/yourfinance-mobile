import { FlatList, TouchableOpacity, View } from 'react-native';
import { useTheme } from 'styled-components/native';

import Button from '../../../../components/Button';
import InputOutlined from '../../../../components/InputOutlined';
import { Text } from '../../../../components/Text';

import { FeedbackViewProps } from './Feedback';
import * as styled from './Feedback.styles';
import { FeedbackViewModelProps } from './Feedback.view-model';

interface Props {
  viewModel: FeedbackViewModelProps;
  props: FeedbackViewProps;
}

export function FeedbackView({ viewModel, props }: Props) {
  const { ...feedbackProps } = props;

  const {
    options,
    selectedFeedback,
    description,
    setDescription,
    setSelectedFeedback,
  } = viewModel;

  const { colors } = useTheme();

  return (
    <styled.Feedback {...feedbackProps} style={{ padding: 24 }}>
      <View>
        <Text weight="500" size={18}>
          Avalie a experiência
        </Text>
        <Text size={14} color={colors.black[600]} style={{ marginTop: 8 }}>
          O que você achou dessa nova experiência?
        </Text>
      </View>

      <FlatList
        data={options}
        style={{ marginTop: 24, marginBottom: 12 }}
        scrollEnabled={false}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => {
          const color =
            selectedFeedback !== item.value
              ? colors.black[500]
              : colors.green[400];
          return (
            <TouchableOpacity
              onPress={() => setSelectedFeedback(item.value)}
              activeOpacity={0.9}
              style={{ alignItems: 'center', width: 90 }}
            >
              {item.icon(color)}
              <Text weight="500" color={color}>
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        }}
        contentContainerStyle={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />

      <InputOutlined
        placeholder="O que poderia melhorar? (opcional)"
        returnKeyType="send"
        autoCorrect={false}
        value={description}
        onChangeText={setDescription}
      />

      <Button
        variant="primary"
        style={{ width: 140 }}
        disabled={!selectedFeedback}
      >
        Enviar
      </Button>
    </styled.Feedback>
  );
}
