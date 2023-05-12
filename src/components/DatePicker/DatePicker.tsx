import { memo } from 'react';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';

import { DatePickerView } from './DatePicker.view';
import { DatePickerViewModel } from './DatePicker.view-model';

export interface DatePickerProps {
  visible: boolean;
  value: Date;
  onChange?: (event: DateTimePickerEvent, date?: Date) => void;
}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface DatePickerViewProps extends Omit<DatePickerProps, ''> {
  // Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function DatePicker(props: DatePickerProps) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return <DatePickerView viewModel={viewModel} props={viewProps} />;
}

export function useViewModel() {
  const viewModel = DatePickerViewModel();

  return viewModel;
}

export default memo(DatePicker);
