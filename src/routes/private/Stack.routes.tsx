import { createStackNavigator } from '@react-navigation/stack';

import Settings from '../../screens/Settings';
import Notifications from '../../screens/Notifications';
import HomeScreen from '../../screens/Home';

export type RootHomeParamList = {
  Home: undefined;
  Settings: undefined;
  Notifications: undefined;
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
      <Home.Screen name="Settings" component={Settings} />

      <Home.Screen name="Notifications" component={Notifications} />
    </Home.Navigator>
  );
}
