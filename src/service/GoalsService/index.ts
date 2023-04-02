import { TGoalResponse, TGoalCreate } from '../../types/Goal';
import HttpClient from '../HttpClient';
import { IGoalsService } from './IGoalsService';

class GoalsService implements IGoalsService {
  private httpClient;

  constructor() {
    this.httpClient = new HttpClient('http://192.168.0.105:3001/api/goalbox');
  }

  async list() {
    return this.httpClient.get<TGoalResponse[]>('/');
  }

  async listOne(goalId: string) {
    return this.httpClient.get<TGoalResponse>(`/findUnique/${goalId}`);
  }

  async create(data: TGoalCreate) {
    return this.httpClient.post<TGoalResponse>('/', data);
  }

  async delete(goalId: string) {
    return this.httpClient.delete<void>(`/${goalId}`);
  }
}

export default new GoalsService();
