import { TCategoryResponse } from '../types/Category';
import { useQuery } from 'react-query';
import CategoriesService from '../service/CategoriesService';

export function useCategories() {
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
