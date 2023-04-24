import { useState } from 'react';

export interface SettingsButtonViewModelProps {
  state: string;
}

export function SettingsButtonViewModel() {
  const [state, setState] = useState('')

  return {
    state,
    setState
  }
}
