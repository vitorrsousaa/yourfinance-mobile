import { NavigationProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CreateGoalDetails from '../../screens/Goals/screens/CreateGoalDetails';
import CreateGoalInformation from '../../screens/Goals/screens/CreateGoalInformation';
import CreateGoalTime from '../../screens/Goals/screens/CreateGoalTime';
import DetailsGoals from '../../screens/Goals/screens/DetailsGoals';
import { TGoal, TGoalCreate } from '../../types/Goal';

export type GoalsRootParamList = {
  DetailsGoals: { goal: TGoal };
  CreateGoalInformation: undefined;
  CreateGoalTime: { goalName: string; goalCost: number; initialValue: number };
  CreateGoalDetails: { goal: TGoalCreate; month: number };
};

export type GoalsRoutesNavigationProp = NavigationProp<GoalsRootParamList>;

const Goals = createStackNavigator<GoalsRootParamList>();

export default function GoalsRoutes() {
  return (
    <Goals.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Goals.Screen name="DetailsGoals" component={DetailsGoals} />
      <Goals.Screen
        name="CreateGoalInformation"
        component={CreateGoalInformation}
      />
      <Goals.Screen name="CreateGoalTime" component={CreateGoalTime} />
      <Goals.Screen name="CreateGoalDetails" component={CreateGoalDetails} />
    </Goals.Navigator>
  );
}
