import { TCategory } from '../../types/Category';
import HttpClient from '../HttpClient';

import { ICategoriesService } from './ICategoriesService';

class CategoriesService implements ICategoriesService {
  private httpClient;

  constructor() {
    this.httpClient = new HttpClient();
  }

  async list() {
    const categories = await this.httpClient.get<TCategory[]>('/category');
    return categories;
  }
}

export default new CategoriesService();
