import { TCategory, TCategoryPersistance } from '../../../types/Category';

import { ICategoryMapper } from './ICategoryMapper';

class CategoryMapper implements ICategoryMapper {
  toDomain(category: TCategoryPersistance): TCategory {
    return {
      id: category.id,
      name: category.name,
    };
  }
}

export default new CategoryMapper();
