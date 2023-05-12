import { TModality, TModalityResponse } from '../../types/Modality';
import HttpClient from '../HttpClient';
import ModalityMapper from '../mappers/ModalityMapper';

import { IModalitiesService } from './IModalitiesService';

class ModalitiesService implements IModalitiesService {
  private httpClient;

  constructor() {
    this.httpClient = new HttpClient();
  }

  async list(): Promise<TModality[]> {
    const modalities = await this.httpClient.get<TModalityResponse[]>(
      '/modality'
    );

    return modalities.map(ModalityMapper.toDomain);
  }
}

export default new ModalitiesService();
