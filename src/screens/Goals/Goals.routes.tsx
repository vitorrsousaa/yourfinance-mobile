import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import GoalsScreen from './Goals';
import Teste from './screens/Teste';

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
      <Goals.Screen
        name="Teste"
        component={Teste}
        // options={{ tabBarVisible: false } as StackNavigationOptions}
      />
    </Goals.Navigator>
  );
}
