import { TModality, TModalityResponse } from '../../types/Modality';
import HttpClient from '../HttpClient';
import ModalityMapper from '../mappers/ModalityMapper';

import { IModalitiesService } from './IModalitiesService';

class ModalitiesService implements IModalitiesService {
  private httpClient;

  constructor() {
    this.httpClient = new HttpClient('http://192.168.0.106:3001/api/modality');
  }

  async list(): Promise<TModality[]> {
    const modalities = await this.httpClient.get<TModalityResponse[]>('/');

    return modalities.map(ModalityMapper.toDomain);
  }
}

export default new ModalitiesService();
