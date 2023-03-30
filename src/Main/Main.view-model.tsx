import { useState } from 'react';

export interface MainViewModelProps {
  state: string;
}

export function MainViewModel() {
  const [state, setState] = useState('');

  return {
    state,
    setState,
  };
}
