import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home as HomeIcon } from '../../components/Icons/Home';

import { useTheme } from 'styled-components/native';
import Analytics from '../../screens/Analytics';
import { ChartBar } from '../../components/Icons/ChartBar';
import Transactions from '../../screens/Transactions';
import { ArrowLeftRight } from '../../components/Icons/ArrowLeftRight';
import Goals from '../../screens/Goals';
import { Target } from '../../components/Icons/Target';
import Home from '../../screens/Home';

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
