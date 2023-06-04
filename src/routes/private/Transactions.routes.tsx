import { NavigationProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CreateTransactions from '../../screens/CreateTransactions';
import DetailsTransaction from '../../screens/DetailsTransaction';
import { TTransaction } from '../../types/Transaction';

export type TransactionsRootParamList = {
  CreateTransactions: undefined;
  DetailsTransaction: { transaction: TTransaction };
};

export type TransactionsRoutesNavigationProp =
  NavigationProp<TransactionsRootParamList>;

const Transactions = createStackNavigator<TransactionsRootParamList>();

export default function TransactionsRoutes() {
  return (
    <Transactions.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Transactions.Screen
        name="CreateTransactions"
        component={CreateTransactions}
      />
      <Transactions.Screen
        name="DetailsTransaction"
        component={DetailsTransaction}
      />
    </Transactions.Navigator>
  );
}
