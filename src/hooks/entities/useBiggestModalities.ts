/* eslint-disable indent */
import { useQuery } from '@tanstack/react-query';

import AnalyticsService from '../../service/AnalyticsService';
import { TBiggestModality } from '../../types/Analytics';

export default function useBiggestModalities(): {
  hasErrorBiggestModalities: boolean;
  isLoadingBiggestModalities: boolean;
  biggestModalities: TBiggestModality;
  refetch: () => Promise<unknown>;
} {
  const {
    data: biggestModalities,
    isError,
    isLoading,
    refetch,
  } = useQuery<TBiggestModality>({
    queryKey: ['@biggestModalities'],
    queryFn: () => AnalyticsService.getBiggestModalities(),
    staleTime: 1000 * 60 * 30, // 30 minutos
    cacheTime: 1000 * 60 * 20, // 20 minutos
  });

  const emptyBiggestModality: TBiggestModality = {
    '0': [],
    '3': [],
    '6': [],
    '12': [],
  };

  return {
    refetch,
    isLoadingBiggestModalities: isLoading,
    hasErrorBiggestModalities: isError,
    biggestModalities: biggestModalities ?? emptyBiggestModality,
  };
}
