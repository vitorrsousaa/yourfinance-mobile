import { NavigationProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../../screens/Login';
import Register from '../../screens/Register';

export type AuthRootParamList = {
  Login: undefined;
  Register: undefined;
};

export type AuthRoutesNavigationProp = NavigationProp<AuthRootParamList>;

const Auth = createStackNavigator<AuthRootParamList>();

export function AuthRoutes() {
  return (
    <Auth.Navigator screenOptions={{ headerShown: false }}>
      <Auth.Screen name="Login" component={Login} />
      <Auth.Screen name="Register" component={Register} />
    </Auth.Navigator>
  );
}
