import { NavigationProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Feedback from '../../screens/Feedback';
import MyAccount from '../../screens/MyAccount';
import SettingsComponent from '../../screens/Settings';

export type SettingsRootParamList = {
  Feedback: undefined;
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
      <Settings.Screen name="Feedback" component={Feedback} />
      <Settings.Screen name="MyAccount" component={MyAccount} />
    </Settings.Navigator>
  );
}
