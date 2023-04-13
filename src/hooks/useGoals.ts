import { useQuery } from 'react-query';
import { TGoalResponse } from '../types/Goal';
import GoalsService from '../service/GoalsService';

export function useGoals() {
  const {
    data: goalsResponse,
    isError,
    isLoading,
    refetch,
  } = useQuery<TGoalResponse[]>({
    queryKey: ['@goals'],
    queryFn: () => GoalsService.list(),
    staleTime: 1000 * 60 * 30, // 30 minutos
    cacheTime: 1000 * 60 * 20, // 20 minutos
  });

  return {
    goals: goalsResponse!,
    isErrorGoals: isError,
    isLoadingGoals: isLoading,
    refetch,
  };
}
