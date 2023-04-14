import { THistoricTransaction } from './HistoricTransaction';

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
  _id: string;
  historicTransaction: THistoricTransaction[];
  user: string;
}
