import { TCategory, TCategoryPersistance } from '../../types/Category';
import HttpClient from '../HttpClient';
import CategoryMapper from '../mappers/Category';

import { ICategoriesService } from './ICategoriesService';

class CategoriesService implements ICategoriesService {
  private httpClient;

  constructor() {
    this.httpClient = new HttpClient();
  }

  async list(): Promise<TCategory[]> {
    const categories = await this.httpClient.get<TCategoryPersistance[]>(
      '/category'
    );

    return categories.map(CategoryMapper.toDomain);
  }
}

export default new CategoriesService();
