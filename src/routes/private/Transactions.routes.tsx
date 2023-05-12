import { NavigationProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CreateTransactions from '../../screens/CreateTransactions';

export type TransactionsRootParamList = {
  CreateTransactions: undefined;
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
    </Transactions.Navigator>
  );
}
