import { TCategory, TCategoryPersistance } from '../../../types/Category';

export interface ICategoryMapper {
  toDomain(category: TCategoryPersistance): TCategory;
}
