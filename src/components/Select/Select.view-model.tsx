import { useState } from 'react';

export interface SelectViewModelProps {
  state: string;
}

export function SelectViewModel() {
  const [state, setState] = useState('');

  return {
    state,
    setState
  };
}
