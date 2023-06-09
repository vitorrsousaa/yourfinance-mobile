import { ReactElement, useState } from 'react';

import Icon from '../../../../components/Icons';

export interface FeedbackViewModelProps {
  options: OptionProps[];
  selectedFeedback: string;
  description: string;
  setDescription: (description: string) => void;
  setSelectedFeedback: (feedback: string) => void;
}

interface OptionProps {
  label: string;
  value: string;
  icon: (color: string) => ReactElement;
}

export function FeedbackViewModel() {
  const [selectedFeedback, setSelectedFeedback] = useState('');
  const [description, setDescription] = useState('');

  const options: OptionProps[] = [
    {
      label: 'Ruim',
      value: 'Ruim',
      icon: (color) => <Icon name="smileAngry" color={color} />,
    },
    {
      label: 'Bom',
      value: 'Bom',
      icon: (color) => <Icon name="smileMeh" color={color} />,
    },
    {
      label: 'Muito Bom',
      value: 'Muito Bom',
      icon: (color) => <Icon name="smileGood" color={color} />,
    },
  ];

  return {
    options,
    selectedFeedback,
    setSelectedFeedback,
    description,
    setDescription,
  };
}
