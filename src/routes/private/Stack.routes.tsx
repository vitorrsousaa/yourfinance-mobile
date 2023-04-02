import { createStackNavigator } from '@react-navigation/stack';

import Settings from '../../screens/Settings';
import Notifications from '../../screens/Notifications';
import Home from '../../screens/Home';

const Stack = createStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />

      <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
  );
}
