import { useNavigation } from '@react-navigation/native';
import { Query, useMutation, useQueryClient } from '@tanstack/react-query';

import Icon from '../../components/Icons';
import TransactionsService from '../../service/TransactionsService';
import { TTransaction } from '../../types/Transaction';
import invalidateQueries from '../../utils/invalidateQueries';

export interface DetailsTransactionViewModelProps {
  params: TTransaction;
  isLoading: boolean;
  isError: boolean;
  getIcon: (category: string) => JSX.Element;
  handleDeleteTransaction: () => Promise<void>;
  goBack: () => void;
}

export function DetailsTransactionViewModel(params: TTransaction) {
  const navigate = useNavigation();
  const queryClient = useQueryClient();

  function getIcon(category: string) {
    if (category === 'Receitas') {
      return <Icon name="income" testID="income-icon" />;
    }
    return <Icon name="outcome" testID="outcome-icon" />;
  }

  const { isLoading, isError, mutateAsync } = useMutation<void>({
    mutationFn: () => TransactionsService.delete(params.id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: invalidateQueries([
          '@transactions',
          '@income',
          '@outcome',
          '@biggestModalities',
        ]),
      });
    },
  });

  async function handleDeleteTransaction() {
    await mutateAsync();
    return navigate.goBack();
  }

  function goBack() {
    return navigate.goBack();
  }

  return {
    params,
    isLoading,
    isError,
    handleDeleteTransaction,
    getIcon,
    goBack,
  };
}
