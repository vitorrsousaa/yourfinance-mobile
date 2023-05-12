import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components/native';

import { ArrowLeftRight } from '../../components/Icons/components/ArrowLeftRight';
import { ChartBar } from '../../components/Icons/components/ChartBar';
import { Home as HomeIcon } from '../../components/Icons/components/Home';
import { Target } from '../../components/Icons/components/Target';
import Analytics from '../../screens/Analytics';
import Goals from '../../screens/Goals';
import Home from '../../screens/Home';
import Transactions from '../../screens/Transactions';

export type HomeTabParamList = {
  Home: undefined;
  Analytics: undefined;
  Transactions: undefined;
  Goals: undefined;
};

const HomeTab = createBottomTabNavigator<HomeTabParamList>();

export function HomeTabRoutes() {
  const { colors } = useTheme();

  return (
    <HomeTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.black[900],
        tabBarInactiveTintColor: colors.black[300],
        tabBarLabelStyle: {
          fontFamily: 'Gotham-500',
          fontSize: 14,
        },
        tabBarStyle: {
          padding: 12,
          height: 72,
        },
      }}
    >
      <HomeTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return <HomeIcon isActive={focused} />;
          },
          tabBarLabel: 'Home',
        }}
      />
      <HomeTab.Screen
        name="Analytics"
        component={Analytics}
        options={{
          tabBarIcon: ({ focused }) => {
            return <ChartBar isActive={focused} />;
          },
          tabBarLabel: 'Analytics',
        }}
      />

      <HomeTab.Screen
        name="Transactions"
        component={Transactions}
        options={{
          tabBarIcon: ({ focused }) => {
            return <ArrowLeftRight isActive={focused} />;
          },
          tabBarLabel: 'Transações',
        }}
      />

      <HomeTab.Screen
        name="Goals"
        component={Goals}
        options={{
          tabBarIcon: ({ focused }) => {
            return <Target isActive={focused} />;
          },
          tabBarLabel: 'Metas',
        }}
      />
    </HomeTab.Navigator>
  );
}
