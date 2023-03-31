import { useState } from 'react';

export interface LastTransactionsViewModelProps {
  state: string;
}

export function LastTransactionsViewModel() {
  const [state, setState] = useState('');

  return {
    state,
    setState,
  };
}
