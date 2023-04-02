import { TGoalCreate, TGoalResponse } from '../../types/Goal';

export interface IGoalsService {
  list(): Promise<TGoalResponse[]>;
  listOne(goalId: string): Promise<TGoalResponse>;
  create(data: TGoalCreate): Promise<TGoalResponse>;
  delete(goalId: string): Promise<void>;
}
