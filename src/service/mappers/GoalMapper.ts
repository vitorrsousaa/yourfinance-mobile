/* eslint-disable indent */
import { TGoal, TGoalResponse, THistoricGoal } from '../../types/Goal';
import { formatDate } from '../../utils/formatDate';

class GoalMapper {
  toDomain(goal: TGoalResponse): TGoal {
    const { historicTransactions } = goal;

    const historic: THistoricGoal[] = historicTransactions
      ? historicTransactions.map((transaction) => {
          return {
            id: transaction.id,
            amount: transaction.amount,
            date: formatDate(transaction.date),
            mode: transaction.modeTransaction,
          };
        })
      : [];

    return {
      id: goal.id,
      balance: goal.balance,
      total: goal.goalCost,
      name: goal.goalName,
      date: {
        end: formatDate(goal.goalTime.endDate),
        initial: formatDate(goal.goalTime.initialDate),
      },
      payOff: goal.payOff,
      historic: historic,
    };
  }
}

export default new GoalMapper();
