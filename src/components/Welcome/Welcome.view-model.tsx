import { useState } from 'react';

export interface WelcomeViewModelProps {
  state: string;
}

export function WelcomeViewModel() {
  const [state, setState] = useState('');

  return {
    state,
    setState,
  };
}
