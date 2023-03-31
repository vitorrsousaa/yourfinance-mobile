import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Transactions from '../screens/Transactions';
import Goals from '../screens/Goals';

const Private = createStackNavigator();

function PrivateRoutes() {
  return (
    <Private.Navigator screenOptions={{ headerShown: false }}>
      <Private.Screen name="Home" component={Home} />
      <Private.Screen name="Transactions" component={Transactions} />
      <Private.Screen name="Goals" component={Goals} />
    </Private.Navigator>
  );
}

export default PrivateRoutes;
