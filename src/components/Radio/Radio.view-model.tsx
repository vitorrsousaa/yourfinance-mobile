import { useState } from 'react';

export interface RadioViewModelProps {
  state: string;
}

export function RadioViewModel() {
  const [state, setState] = useState('')

  return {
    state,
    setState
  }
}
