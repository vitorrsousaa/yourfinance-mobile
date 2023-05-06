import { TCategory } from '../../types/Category';
import HttpClient from '../HttpClient';

import { ICategoriesService } from './ICategoriesService';

class CategoriesService implements ICategoriesService {
  private httpClient;

  constructor() {
    this.httpClient = new HttpClient('http://192.168.0.106:3001/api');
  }

  async list() {
    const categories = await this.httpClient.get<TCategory[]>('/category');
    console.log(categories);
    return categories;
  }
}

export default new CategoriesService();
