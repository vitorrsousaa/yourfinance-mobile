import { useState } from 'react';

export interface TouchableViewModelProps {
  state: string;
}

export function TouchableViewModel() {
  const [state, setState] = useState('');

  return {
    state,
    setState,
  };
}
