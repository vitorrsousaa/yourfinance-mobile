import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../hooks/useAuth';
import { AuthRoutes } from './public';
import PrivateRoutes from './private';
import { ActivityIndicator, View } from 'react-native';

export function Router() {
  const { authenticated, loading } = useAuth();

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#395bfc',
        }}
      >
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {authenticated ? <PrivateRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
