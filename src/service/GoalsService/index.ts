import { TGoalCreate, TGoalResponse, TGoalTransaction } from '../../types/Goal';
import HttpClient from '../HttpClient';
import GoalMapper from '../mappers/GoalMapper';

import { IGoalsService } from './IGoalsService';

class GoalsService implements IGoalsService {
  private httpClient;

  constructor() {
    this.httpClient = new HttpClient();
  }

  async list() {
    const goals = await this.httpClient.get<TGoalResponse[]>('/goalbox');

    return goals.map(GoalMapper.toDomain);
  }

  async listOne(id: string) {
    const goal = await this.httpClient.get<TGoalResponse>(
      `/goalbox/findUnique/${id}`
    );

    return GoalMapper.toDomain(goal);
  }

  async create(data: TGoalCreate) {
    const goal = await this.httpClient.post<TGoalResponse>('/goalbox', data);
    return GoalMapper.toDomain(goal);
  }

  async delete(id: string) {
    return this.httpClient.delete<void>(`/goalbox/${id}`);
  }

  async createTransaction(id: string, data: TGoalTransaction) {
    const goal = await this.httpClient.patch<TGoalResponse>(
      `/goalbox/${id}`,
      data
    );
    return GoalMapper.toDomain(goal);
  }
}

export default new GoalsService();
