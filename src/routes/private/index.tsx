import { createStackNavigator } from '@react-navigation/stack';

import Notifications from '../../screens/Home/screens/Notifications';
import { HomeTabRoutes } from './HomeTab.routes';
import Settings from '../../screens/Home/screens/Settings';
import DetailsGoals from '../../screens/Goals/screens/DetailsGoals';

export type PrivateRootParamList = {
  HomeTabs: undefined;
  Notifications: undefined;
  Settings: undefined;
  DetailsGoals: undefined;
};

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
      <Private.Screen name="DetailsGoals" component={DetailsGoals} />
    </Private.Navigator>
  );
}
