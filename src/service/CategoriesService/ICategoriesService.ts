import { Category } from '../../types/Category';

export interface ICategoriesService {
  list(): Promise<Category[]>;
}
