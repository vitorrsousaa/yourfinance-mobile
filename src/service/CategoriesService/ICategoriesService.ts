import { TCategory } from '../../types/Category';

export interface ICategoriesService {
  list(): Promise<TCategory[]>;
}
