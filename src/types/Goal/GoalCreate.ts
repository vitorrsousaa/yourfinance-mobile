export interface TGoalCreate {
  goalName: string;
  goalCost: number;
  goalTime: {
    endDate: string;
  };
  initialValue: number;
}
