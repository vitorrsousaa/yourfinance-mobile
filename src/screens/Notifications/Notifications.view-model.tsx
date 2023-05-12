import { useState } from 'react';

export interface NotificationsViewModelProps {
  state: string;
}

export function NotificationsViewModel() {
  const [state, setState] = useState('');

  return {
    state,
    setState
  };
}
