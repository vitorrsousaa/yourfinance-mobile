import { createStackNavigator } from '@react-navigation/stack';

import { HomeTabRoutes } from './HomeTab.routes';
import GoalsRoutes, { GoalsRootParamList } from './Goal.routes';
import {
  NavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';
import UserRoutes, { UserRootParamList } from './User.routes';

export type PrivateRootParamList = {
  HomeTabs: undefined;
  User: NavigatorScreenParams<UserRootParamList>;
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
      <Private.Screen name="User" component={UserRoutes} />
      <Private.Screen name="GoalsRoutes" component={GoalsRoutes} />
    </Private.Navigator>
  );
}
