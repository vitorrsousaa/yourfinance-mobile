import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import GoalsScreen from './Goals';

export type RootGoalsParamList = {
  GoalsScreen: undefined;
  Teste: undefined;
};

const Goals = createStackNavigator<RootGoalsParamList>();

export function GoalsRoutes() {
  return (
    <Goals.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Goals.Screen name="GoalsScreen" component={GoalsScreen} />
    </Goals.Navigator>
  );
}
