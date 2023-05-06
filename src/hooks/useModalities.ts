import { useQuery } from 'react-query';

import ModalitiesService from '../service/ModalitiesService';
import { TModality } from '../types/Modality';

export function useModalities(): {
  modalities: TModality[];
  isErrorModalities: boolean;
  isLoadingModalities: boolean;
  refetch: () => Promise<unknown>;
} {
  const {
    data: modalities,
    isError,
    refetch,
    isLoading,
  } = useQuery<TModality[]>({
    queryKey: ['@modalities'],
    queryFn: () => ModalitiesService.list(),
    staleTime: 1000 * 60 * 30, // 30 minutos
    cacheTime: 1000 * 60 * 20, // 20 minutos
  });

  return {
    modalities: modalities!,
    isErrorModalities: isError,
    refetch,
    isLoadingModalities: isLoading,
  };
}
