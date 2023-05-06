import { ReactElement, useMemo, useState } from 'react';

import Icon from '../../components/Icons';

interface OptionProps {
  label: string;
  value: string;
  icon: (color: string) => ReactElement;
}

export interface FeedbackViewModelProps {
  selectedFeedback: string;
  description: string;
  isSubmitting: boolean;
  options: OptionProps[];
  setDescription: (text: string) => void;
  setSelectedFeedback: (feedback: string) => void;
  handleSubmit: () => Promise<void>;
}

export function FeedbackViewModel() {
  const [selectedFeedback, setSelectedFeedback] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const options: OptionProps[] = useMemo(
    () => [
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
    ],
    []
  );

  async function handleSubmit() {
    const feedback = { selectedFeedback: selectedFeedback, description };

    setIsSubmitting(true);
    try {
      console.log(feedback);
    } catch {
      console.log(
        'Adicionar um toast de erro dentro da handleSubmit do feedback'
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return {
    selectedFeedback,
    options,
    isSubmitting,
    description,
    setDescription,
    setSelectedFeedback,
    handleSubmit,
  };
}
