import { TModality } from '../../types/Modality';

export interface IModalitiesService {
  list(): Promise<TModality[]>;
}
