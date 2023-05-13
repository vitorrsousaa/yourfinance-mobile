import { THistoricGoalResponse } from './HistoricGoal';

export interface TGoalResponse {
  goalName: string;
  goalCost: number;
  goalTime: {
    initialDate: string;
    endDate: string;
    endMonths: number;
  };
  balance: number;
  payOff: number;
  id: string;
  historicTransactions: THistoricGoalResponse[];
  user: string;
}
