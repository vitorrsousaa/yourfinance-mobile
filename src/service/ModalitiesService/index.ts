import { TModality } from '../../types/Modality';
import HttpClient from '../HttpClient';
import { IModalitiesService } from './IModalitiesService';

class ModalitiesService implements IModalitiesService {
  private httpClient;

  constructor() {
    this.httpClient = new HttpClient('http://192.168.0.106:3001/api/modality');
  }

  async list() {
    return this.httpClient.get<TModality[]>('/');
  }
}

export default new ModalitiesService();
