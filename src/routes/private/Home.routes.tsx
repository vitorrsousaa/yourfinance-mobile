import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import Settings from '../../screens/Settings';
import Notifications from '../../screens/Notifications';
import HomeScreen from '../../screens/Home';

export type RootHomeParamList = {
  Home: undefined;
  Settings: undefined;
  Notifications: { tabBarVisible: boolean };
};

const Home = createStackNavigator<RootHomeParamList>();

export function HomeRoutes() {
  return (
    <Home.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Home.Screen name="Home" component={HomeScreen} />
      <Home.Screen
        name="Settings"
        component={Settings}
        options={{ tabBarVisible: false } as StackNavigationOptions}
      />

      <Home.Screen name="Notifications" component={Notifications} />
    </Home.Navigator>
  );
}
