import { useQuery } from 'react-query';
import { TModalityResponse } from '../types/Modality';
import ModalitiesService from '../service/ModalitiesService';

export function useModalities() {
  const {
    data: modalities,
    isError,
    refetch,
    isLoading,
  } = useQuery<TModalityResponse>({
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
