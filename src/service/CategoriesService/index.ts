import { TCategory } from '../../types/Category';
import HttpClient from '../HttpClient';
import { ICategoriesService } from './ICategoriesService';

class CategoriesService implements ICategoriesService {
  private httpClient;

  constructor() {
    this.httpClient = new HttpClient('http://192.168.0.105:3001/api');
  }

  async list() {
    return this.httpClient.get<TCategory[]>('/category');
  }
}

export default new CategoriesService();
