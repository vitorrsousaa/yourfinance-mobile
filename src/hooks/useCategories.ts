/* eslint-disable indent */
import { useQuery } from '@tanstack/react-query';

import CategoriesService from '../service/CategoriesService';
import { TCategory } from '../types/Category';

export default function useCategories(): {
  categories: TCategory[];
  isErrorCategories: boolean;
  refetch: () => Promise<unknown>;
  isLoadingCategories: boolean;
} {
  const {
    data: categories,
    isError,
    refetch,
    isLoading,
  } = useQuery<TCategory[]>({
    queryKey: ['@categories'],
    queryFn: () => CategoriesService.list(),
    staleTime: 1000 * 60 * 30, // 30 minutos
    cacheTime: 1000 * 60 * 20, // 20 minutos
  });

  return {
    categories: categories ? categories : [],
    isErrorCategories: isError,
    refetch,
    isLoadingCategories: isLoading,
  };
}
