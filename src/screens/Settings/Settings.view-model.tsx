import { useState } from 'react';

export interface SettingsViewModelProps {
  state: string;
}

export function SettingsViewModel() {
  const [state, setState] = useState('')

  return {
    state,
    setState
  }
}
