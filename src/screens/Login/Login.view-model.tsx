import { useState } from 'react';

export interface LoginViewModelProps {
  state: string;
}

export function LoginViewModel() {
  const [state, setState] = useState('');

  return {
    state,
    setState,
  };
}
