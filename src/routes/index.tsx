import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../hooks/useAuth';
import { AuthRoutes } from './public';
import PrivateRoutes from './private';

export function Router() {
  const { authenticated, loading } = useAuth();

  if (loading) {
    return null;
  }

  return (
    <NavigationContainer>
      {authenticated ? <PrivateRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
