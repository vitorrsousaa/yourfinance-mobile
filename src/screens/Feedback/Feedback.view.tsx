import { useNavigation } from '@react-navigation/native';
import {
  FlatList,
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components/native';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import { Text } from '../../components/Text';
import { isAndroid } from '../../utils/isAndroid';

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
    isSubmitting,
    description,
    setSelectedFeedback,
    setDescription,
    handleSubmit,
  } = viewModel;

  const navigation = useNavigation();

  const { colors } = useTheme();

  return (
    <styled.Feedback>
      <KeyboardAvoidingView
        behavior={isAndroid ? 'height' : 'padding'}
        style={{ flex: 1 }}
      >
        <Header title="Feedback" onPressLeftIcon={() => navigation.goBack()} />

        <ScrollView style={{ backgroundColor: 'blue', flex: 1 }}>
          <styled.Container>
            <View style={{ gap: 24, backgroundColor: 'red' }}>
              <View style={{ gap: 16, backgroundColor: 'orange' }}>
                <Text weight="500" size={20}>
                  O que você achou do App?
                </Text>

                <FlatList
                  data={options}
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
              </View>

              <View style={{ backgroundColor: 'green', flex: 1 }}>
                <Text weight="500" size={20}>
                  Conte mais sobre a sua experiência
                </Text>
                <Input
                  placeholder="Deixe aqui sua opinião"
                  style={{
                    height: 290,
                    width: '100%',
                    textAlignVertical: 'top',
                  }}
                  value={description}
                  onChangeText={setDescription}
                  returnKeyType="send"
                  autoCorrect={false}
                  // onSubmitEditing={handleSubmit}
                />
              </View>
            </View>
            <styled.Footer style={{ backgroundColor: 'yellow' }}>
              <Button
                variant="empty"
                style={{ width: 100 }}
                disabled={isSubmitting}
                onPress={() => navigation.goBack()}
              >
                Cancelar
              </Button>
              <Button
                variant="primary"
                loading={isSubmitting}
                disabled={!selectedFeedback}
                onPress={handleSubmit}
                style={{ flex: 1 }}
              >
                Enviar
              </Button>
            </styled.Footer>
          </styled.Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </styled.Feedback>
  );
}
