import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../hooks/useAuth';
import { AuthRoutes } from './public';
import PrivateRoutes from './private';
import { ActivityIndicator, View } from 'react-native';

export function Router() {
  const { authenticated, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1 }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {authenticated ? <PrivateRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
