import { useState } from 'react';

export interface TransactionViewModelProps {
  state: string;
}

export function TransactionViewModel() {
  const [state, setState] = useState('');

  return {
    state,
    setState,
  };
}
