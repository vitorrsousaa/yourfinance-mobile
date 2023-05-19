import { useState } from 'react';

export interface LabelChartViewModelProps {
  state: string;
}

export function LabelChartViewModel() {
  const [state, setState] = useState('')

  return {
    state,
    setState
  }
}
