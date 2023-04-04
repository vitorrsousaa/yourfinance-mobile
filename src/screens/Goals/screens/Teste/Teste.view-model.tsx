import { useState } from 'react';

export interface TesteViewModelProps {
  state: string;
}

export function TesteViewModel() {
  const [state, setState] = useState('');

  return {
    state,
    setState,
  };
}
