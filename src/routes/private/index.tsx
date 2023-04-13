import { createStackNavigator } from '@react-navigation/stack';

import Notifications from '../../screens/Home/screens/Notifications';
import { HomeTabRoutes } from './HomeTab.routes';
import Settings from '../../screens/Home/screens/Settings';
import GoalsRoutes, { GoalsRootParamList } from './Goal.routes';
import {
  NavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';

export type PrivateRootParamList = {
  HomeTabs: undefined;
  Notifications: undefined;
  Settings: undefined;
  GoalsRoutes: NavigatorScreenParams<GoalsRootParamList>;
};

export type PrivateRouteNavigationProp = NavigationProp<PrivateRootParamList>;

const Private = createStackNavigator<PrivateRootParamList>();

export default function PrivateRoutes() {
  return (
    <Private.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Private.Screen name="HomeTabs" component={HomeTabRoutes} />
      <Private.Screen name="Notifications" component={Notifications} />
      <Private.Screen name="Settings" component={Settings} />
      <Private.Screen name="GoalsRoutes" component={GoalsRoutes} />
    </Private.Navigator>
  );
}
