import { useState } from 'react';

export interface TransactionsViewModelProps {
  state: string;
}

export function TransactionsViewModel() {
  const [state, setState] = useState('');

  return {
    state,
    setState,
  };
}
