export interface TGoalCreate {
  goalName: string;
  goalCost: number;
  goalTime: {
    initialDate: Date;
    endDate: Date;
  };
  initialValue: number;
}
