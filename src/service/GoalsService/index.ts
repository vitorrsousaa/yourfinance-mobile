import { TGoalCreate, TGoalResponse, TGoalTransaction } from '../../types/Goal';
import HttpClient from '../HttpClient';

import { IGoalsService } from './IGoalsService';

class GoalsService implements IGoalsService {
  private httpClient;

  constructor() {
    this.httpClient = new HttpClient();
  }

  async list() {
    return this.httpClient.get<TGoalResponse[]>('/goalbox/');
  }

  async listOne(goalId: string) {
    return this.httpClient.get<TGoalResponse>(`/goalbox/findUnique/${goalId}`);
  }

  async create(data: TGoalCreate) {
    return this.httpClient.post<TGoalResponse>('/goalbox/', data);
  }

  async delete(goalId: string) {
    return this.httpClient.delete<void>(`/goalbox/${goalId}`);
  }

  async createTransaction(goalId: string, data: TGoalTransaction) {
    return this.httpClient.patch<TGoalResponse>(`/goalbox/${goalId}`, data);
  }
}

export default new GoalsService();
