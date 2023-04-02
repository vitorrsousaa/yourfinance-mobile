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
  historicTransaction: {
    date: string;
    amount: number;
    modeTransaction: 'LESS';
  };
  user: string;
}
