import { useQuery } from 'react-query';

import GoalsService from '../service/GoalsService';
import { TGoal } from '../types/Goal';

export function useGoals(): {
  goals: TGoal[];
  isErrorGoals: boolean;
  isLoadingGoals: boolean;
  refetch: () => Promise<unknown>;
} {
  const {
    data: goalsResponse,
    isError,
    isLoading,
    isFetching,
    refetch,
  } = useQuery<TGoal[]>({
    queryKey: ['@goals'],
    queryFn: () => GoalsService.list(),
    staleTime: 1000 * 60 * 30, // 30 minutos
    cacheTime: 1000 * 60 * 20, // 20 minutos
  });

  return {
    goals: goalsResponse!,
    isErrorGoals: isError,
    isLoadingGoals: isLoading || isFetching,
    refetch,
  };
}
