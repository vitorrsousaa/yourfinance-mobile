export interface TGoalCreate {
  goalName: string;
  goalCost: number;
  goalTime: {
    initialDate: string;
    endDate: string;
  };
  initialValue: number;
}
