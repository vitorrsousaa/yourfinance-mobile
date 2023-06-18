import { ReactElement, useState } from 'react';
import { useMutation } from '@tanstack/react-query';

import Icon from '../../../../components/Icons';
import FeedbacksService from '../../../../service/FeedbacksService';

export interface FeedbackViewModelProps {
  options: OptionProps[];
  selectedFeedback: string;
  description: string;
  isLoading: boolean;
  isError: boolean;
  isSubmitted: boolean;
  setDescription: (description: string) => void;
  setSelectedFeedback: (feedback: string) => void;
  handleSubmit: () => Promise<void>;
}

interface OptionProps {
  label: string;
  value: string;
  icon: (color: string) => ReactElement;
}

export function FeedbackViewModel() {
  const [selectedFeedback, setSelectedFeedback] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { isLoading, isError, mutateAsync } = useMutation({
    mutationFn: () =>
      FeedbacksService.register({ selectedFeedback, description }),
    onSuccess: () => setIsSubmitted(true),
    onError: () => console.log('Erro'),
  });

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

  async function handleSubmit() {
    await mutateAsync();
  }

  return {
    options,
    selectedFeedback,
    description,
    isLoading,
    isError,
    isSubmitted,
    handleSubmit,
    setSelectedFeedback,
    setDescription,
  };
}
