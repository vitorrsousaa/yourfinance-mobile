import { useState } from 'react';

export interface DatePickerViewModelProps {
  state: string;
}

export function DatePickerViewModel() {
  const [state, setState] = useState('')

  return {
    state,
    setState
  }
}
