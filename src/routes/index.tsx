import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, View } from 'react-native';

import { useAuth } from '../hooks/useAuth';

import PrivateRoutes from './private';
import { AuthRoutes } from './public';

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
