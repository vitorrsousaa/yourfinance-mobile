import { NavigationProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MyAccount from '../../screens/MyAccount';
import SettingsComponent from '../../screens/Settings';

export type SettingsRootParamList = {
  MyAccount: undefined;
  Main: undefined;
};

export type SettingsRoutesNavigationProp =
  NavigationProp<SettingsRootParamList>;

const Settings = createStackNavigator<SettingsRootParamList>();

export default function SettingsRoutes() {
  return (
    <Settings.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Settings.Screen name="Main" component={SettingsComponent} />
      <Settings.Screen name="MyAccount" component={MyAccount} />
    </Settings.Navigator>
  );
}
