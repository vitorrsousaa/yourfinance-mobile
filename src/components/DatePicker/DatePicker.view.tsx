import DateTimePicker from '@react-native-community/datetimepicker';

import { DatePickerViewProps } from './DatePicker';
import * as styled from './DatePicker.styles';
import { DatePickerViewModelProps } from './DatePicker.view-model';
interface Props {
  viewModel: DatePickerViewModelProps;
  props: DatePickerViewProps;
}

export function DatePickerView({ viewModel, props }: Props) {
  const { visible, value, onChange, ...datePickerProps } = props;

  if (!visible) {
    return null;
  }

  return (
    <styled.DatePicker>
      <DateTimePicker
        mode="date"
        textColor="green"
        locale="pt-BR"
        value={value}
        onChange={onChange}
        display="spinner"
        negativeButton={{ label: 'Cancelar', textColor: 'red' }}
        positiveButton={{ label: 'Confirmar' }}
        minimumDate={new Date(2022, 0, 1)}
        maximumDate={new Date()}
        {...datePickerProps}
      />
    </styled.DatePicker>
  );
}
