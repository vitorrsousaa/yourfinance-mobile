import { createStackNavigator } from '@react-navigation/stack';

import { NavigationProp } from '@react-navigation/native';

import Notifications from '../../screens/Notifications';
import SettingsRoutes from './Settings.routes';

export type UserRootParamList = {
  Settings: undefined;
  Notification: undefined;
};

export type UserRoutesNavigationProp = NavigationProp<UserRootParamList>;

const User = createStackNavigator<UserRootParamList>();

export default function UserRoutes() {
  return (
    <User.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <User.Screen name="Settings" component={SettingsRoutes} />
      <User.Screen name="Notification" component={Notifications} />
    </User.Navigator>
  );
}
