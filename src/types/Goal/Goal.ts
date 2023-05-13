import { THistoricGoal } from './HistoricGoal';

export interface TGoal {
  balance: number;
  total: number;
  name: string;
  date: {
    end: string;
    initial: string;
  };
  payOff: number;
  historic: THistoricGoal[];
  id: string;
}
