import { TModeTransaction } from './modeTransaction';

export interface THistoricGoal {
  id: string;
  date: string;
  amount: number;
  mode: TModeTransaction;
}

export interface THistoricGoalResponse {
  id: string;
  date: string;
  amount: number;
  modeTransaction: TModeTransaction;
}
