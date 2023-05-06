import { useQuery } from 'react-query';

import CategoriesService from '../service/CategoriesService';
import { TCategoryResponse } from '../types/Category';

export function useCategories(): {
  categories: TCategoryResponse;
  isErrorCategories: boolean;
  refetch: () => Promise<unknown>;
  isLoadingCategories: boolean;
  } {
  const {
    data: categories,
    isError,
    refetch,
    isLoading,
  } = useQuery<TCategoryResponse>({
    queryKey: ['@categories'],
    queryFn: () => CategoriesService.list(),
    staleTime: 1000 * 60 * 30, // 30 minutos
    cacheTime: 1000 * 60 * 20, // 20 minutos
  });

  return {
    categories: categories!,
    isErrorCategories: isError,
    refetch,
    isLoadingCategories: isLoading,
  };
}
