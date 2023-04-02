import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../screens/Login';

const Auth = createStackNavigator();

export function AuthRoutes() {
  return (
    <Auth.Navigator screenOptions={{ headerShown: false }}>
      <Auth.Screen name="Login" component={Login} />
    </Auth.Navigator>
  );
}
