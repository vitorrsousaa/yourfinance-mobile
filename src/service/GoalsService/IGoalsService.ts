import { TGoal, TGoalCreate, TGoalTransaction } from '../../types/Goal';

export interface IGoalsService {
  list(): Promise<TGoal[]>;
  listOne(goalId: string): Promise<TGoal>;
  create(data: TGoalCreate): Promise<TGoal>;
  delete(goalId: string): Promise<void>;
  createTransaction(goalId: string, data: TGoalTransaction): Promise<TGoal>;
}
